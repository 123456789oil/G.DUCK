require 'rails_helper'

RSpec.describe TopicsController do
  let(:topic) { Fabricate(:topic) }
  let(:user) { Fabricate(:user) }

  describe '#show' do
    let(:private_topic) { Fabricate(:private_message_topic) }

    describe 'when topic is not allowed' do
      it 'should return the right response' do
        sign_in(user)

        get "/t/#{private_topic.id}.json"

        expect(response.status).to eq(403)
        expect(response.body).to eq(I18n.t('invalid_access'))
      end
    end
  end

  describe '#timings' do
    let(:post_1) { Fabricate(:post, topic: topic) }

    it 'should record the timing' do
      sign_in(user)

      post "/topics/timings.json", params: {
        topic_id: topic.id,
        topic_time: 5,
        timings: { post_1.post_number => 2 }
      }

      expect(response).to be_success

      post_timing = PostTiming.first

      expect(post_timing.topic).to eq(topic)
      expect(post_timing.user).to eq(user)
      expect(post_timing.msecs).to eq(2)
    end
  end

  describe '#timer' do
    context 'when a user is not logged in' do
      it 'should return the right response' do
        post "/t/#{topic.id}/timer.json", params: {
          time: '24',
          status_type: TopicTimer.types[1]
        }
        expect(response.status).to eq(403)
      end
    end

    context 'when does not have permission' do
      it 'should return the right response' do
        sign_in(user)

        post "/t/#{topic.id}/timer.json", params: {
          time: '24',
          status_type: TopicTimer.types[1]
        }

        expect(response.status).to eq(403)
        expect(JSON.parse(response.body)["error_type"]).to eq('invalid_access')
      end
    end

    context 'when logged in as an admin' do
      let(:admin) { Fabricate(:admin) }

      before do
        sign_in(admin)
      end

      it 'should be able to create a topic status update' do
        post "/t/#{topic.id}/timer.json", params: {
          time: 24,
          status_type: TopicTimer.types[1]
        }

        expect(response).to be_success

        topic_status_update = TopicTimer.last

        expect(topic_status_update.topic).to eq(topic)

        expect(topic_status_update.execute_at)
          .to be_within(1.second).of(24.hours.from_now)

        json = JSON.parse(response.body)

        expect(DateTime.parse(json['execute_at']))
          .to be_within(1.seconds).of(DateTime.parse(topic_status_update.execute_at.to_s))

        expect(json['duration']).to eq(topic_status_update.duration)
        expect(json['closed']).to eq(topic.reload.closed)
      end

      it 'should be able to delete a topic status update' do
        Fabricate(:topic_timer, topic: topic)

        post "/t/#{topic.id}/timer.json", params: {
          time: nil,
          status_type: TopicTimer.types[1]
        }

        expect(response).to be_success
        expect(topic.reload.public_topic_timer).to eq(nil)

        json = JSON.parse(response.body)

        expect(json['execute_at']).to eq(nil)
        expect(json['duration']).to eq(nil)
        expect(json['closed']).to eq(topic.closed)
      end

      describe 'publishing topic to category in the future' do
        it 'should be able to create the topic status update' do
          SiteSetting.queue_jobs = true

          post "/t/#{topic.id}/timer.json", params: {
            time: 24,
            status_type: TopicTimer.types[3],
            category_id: topic.category_id
          }

          expect(response).to be_success

          topic_status_update = TopicTimer.last

          expect(topic_status_update.topic).to eq(topic)

          expect(topic_status_update.execute_at)
            .to be_within(1.second).of(24.hours.from_now)

          expect(topic_status_update.status_type)
            .to eq(TopicTimer.types[:publish_to_category])

          json = JSON.parse(response.body)

          expect(json['category_id']).to eq(topic.category_id)
        end
      end

      describe 'invalid status type' do
        it 'should raise the right error' do
          post "/t/#{topic.id}/timer.json", params: {
            time: 10,
            status_type: 'something'
          }
          expect(response.status).to eq(400)
          expect(response.body).to include('status_type')
        end
      end
    end
  end

  describe 'invite_group' do
    let(:admins) { Group[:admins] }
    let(:pm) { Fabricate(:private_message_topic) }

    def invite_group(topic, expected_status)
      post "/t/#{topic.id}/invite-group.json", params: { group: admins.name }
      expect(response.status).to eq(expected_status)
    end

    before do
      admins.update!(messageable_level: Group::ALIAS_LEVELS[:everyone])
    end

    describe 'as an anon user' do
      it 'should be forbidden' do
        invite_group(pm, 403)
      end
    end

    describe 'as a normal user' do
      let!(:user) { sign_in(Fabricate(:user)) }

      describe 'when user does not have permission to view the topic' do
        it 'should be forbidden' do
          invite_group(pm, 403)
        end
      end

      describe 'when user has permission to view the topic' do
        before do
          pm.allowed_users << user
        end

        it 'should allow user to invite group to topic' do
          invite_group(pm, 200)
          expect(pm.allowed_groups.first.id).to eq(admins.id)
        end
      end
    end

    describe 'as an admin user' do
      let!(:admin) { sign_in(Fabricate(:admin)) }

      it "allows inviting a group to a topic" do
        topic = Fabricate(:topic)
        invite_group(topic, 200)
      end

      it "allows inviting a group to a PM" do
        invite_group(pm, 200)
        expect(pm.allowed_groups.first.id).to eq(admins.id)
      end
    end
  end
end
