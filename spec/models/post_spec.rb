require 'spec_helper'
require_dependency 'post_destroyer'

describe Post do

  before do
    ImageSorcery.any_instance.stubs(:convert).returns(false)
  end

  # Help us build a post with a raw body
  def post_with_body(body, user=nil)
    args = post_args.merge(raw: body)
    args[:user] = user if user.present?
    Fabricate.build(:post, args)
  end

  it { should belong_to :user }
  it { should belong_to :topic }
  it { should validate_presence_of :raw }

  # Min/max body lengths, respecting padding
  it { should_not allow_value("x").for(:raw) }
  it { should_not allow_value("x" * (SiteSetting.max_post_length + 1)).for(:raw) }
  it { should_not allow_value((" " * SiteSetting.min_post_length) + "x").for(:raw) }

  it { should have_many :post_replies }
  it { should have_many :replies }

  it { should rate_limit }

  let(:topic) { Fabricate(:topic) }
  let(:post_args) do
    {user: topic.user, topic: topic}
  end

  it_behaves_like "a versioned model"

  describe 'scopes' do

    describe '#by_newest' do
      it 'returns posts ordered by created_at desc' do
        2.times { Fabricate(:post) }
        Post.by_newest.first.created_at.should > Post.by_newest.last.created_at
      end
    end

    describe '#with_user' do
      it 'gives you a user' do
        Fabricate(:post, user: Fabricate(:user))
        Post.with_user.first.user.should be_a User
      end
    end

  end

  describe "versions and deleting/recovery" do
    let(:post) { Fabricate(:post, post_args) }

    before do
      post.trash!
      post.reload
    end

    it "doesn't create a new version when deleted" do
      post.versions.count.should == 0
    end

    describe "recovery" do
      before do
        post.recover!
        post.reload
      end

      it "doesn't create a new version when recovered" do
        post.versions.count.should == 0
      end
    end

  end

  describe 'flagging helpers' do
    it 'isFlagged is accurate' do
      post = Fabricate(:post)
      user = Fabricate(:coding_horror)
      PostAction.act(user, post, PostActionType.types[:off_topic])

      post.reload
      post.is_flagged?.should == true

      PostAction.remove_act(user, post, PostActionType.types[:off_topic])
      post.reload
      post.is_flagged?.should == false
    end
  end

  describe "maximum images" do
    let(:newuser) { Fabricate(:user, trust_level: TrustLevel.levels[:newuser]) }
    let(:post_no_images) { Fabricate.build(:post, post_args.merge(user: newuser)) }
    let(:post_one_image) { post_with_body("![sherlock](http://bbc.co.uk/sherlock.jpg)", newuser) }
    let(:post_two_images) { post_with_body("<img src='http://discourse.org/logo.png'> <img src='http://bbc.co.uk/sherlock.jpg'>", newuser) }
    let(:post_with_avatars) { post_with_body('<img alt="smiley" title=":smiley:" src="/assets/emoji/smiley.png" class="avatar"> <img alt="wink" title=":wink:" src="/assets/emoji/wink.png" class="avatar">', newuser) }
    let(:post_with_favicon) { post_with_body('<img src="/assets/favicons/wikipedia.png" class="favicon">', newuser) }
    let(:post_with_thumbnail) { post_with_body('<img src="/assets/emoji/smiley.png" class="thumbnail">', newuser) }
    let(:post_with_two_classy_images) { post_with_body("<img src='http://discourse.org/logo.png' class='classy'> <img src='http://bbc.co.uk/sherlock.jpg' class='classy'>", newuser) }

    it "returns 0 images for an empty post" do
      Fabricate.build(:post).image_count.should == 0
    end

    it "finds images from markdown" do
      post_one_image.image_count.should == 1
    end

    it "finds images from HTML" do
      post_two_images.image_count.should == 2
    end

    it "doesn't count avatars as images" do
      post_with_avatars.image_count.should == 0
    end

    it "doesn't count favicons as images" do
      post_with_favicon.image_count.should == 0
    end

    it "doesn't count thumbnails as images" do
      post_with_thumbnail.image_count.should == 0
    end

    it "doesn't count whitelisted images" do
      Post.stubs(:white_listed_image_classes).returns(["classy"])
      post_with_two_classy_images.image_count.should == 0
    end

    context "validation" do

      before do
        SiteSetting.stubs(:newuser_max_images).returns(1)
      end

      context 'newuser' do
        it "allows a new user to post below the limit" do
          post_one_image.should be_valid
        end

        it "doesn't allow more than the maximum" do
          post_two_images.should_not be_valid
        end

        it "doesn't allow a new user to edit their post to insert an image" do
          post_no_images.user.trust_level = TrustLevel.levels[:new]
          post_no_images.save
          -> {
            post_no_images.revise(post_no_images.user, post_two_images.raw)
            post_no_images.reload
          }.should_not change(post_no_images, :raw)
        end
      end

      it "allows more images from a not-new account" do
        post_two_images.user.trust_level = TrustLevel.levels[:basic]
        post_two_images.should be_valid
      end

    end

  end


  it 'validates' do
    Fabricate.build(:post, post_args).should be_valid
  end

  context "raw_hash" do

    let(:raw) { "this is our test post body"}
    let(:post) { post_with_body(raw) }

    it "returns a value" do
      post.raw_hash.should be_present
    end

    it "returns blank for a nil body" do
      post.raw = nil
      post.raw_hash.should be_blank
    end

    it "returns the same value for the same raw" do
      post.raw_hash.should == post_with_body(raw).raw_hash
    end

    it "returns a different value for a different raw" do
      post.raw_hash.should_not == post_with_body("something else").raw_hash
    end

    it "returns the same hash even with different white space" do
      post.raw_hash.should == post_with_body(" thisis ourt est postbody").raw_hash
    end

    it "returns the same hash even with different text case" do
      post.raw_hash.should == post_with_body("THIS is OUR TEST post BODy").raw_hash
    end
  end

  context 'revise' do

    let(:post) { Fabricate(:post, post_args) }
    let(:first_version_at) { post.last_version_at }

    it 'has one version in all_versions' do
      post.all_versions.size.should == 1
      first_version_at.should be_present
      post.revise(post.user, post.raw).should be_false
    end


    describe 'with the same body' do
      it "doesn't change cached_version" do
        lambda { post.revise(post.user, post.raw); post.reload }.should_not change(post, :cached_version)
      end

    end

    describe 'ninja editing' do
      before do
        SiteSetting.expects(:ninja_edit_window).returns(1.minute.to_i)
        post.revise(post.user, 'updated body', revised_at: post.updated_at + 10.seconds)
        post.reload
      end

      it 'causes no update' do
        post.cached_version.should == 1
        post.all_versions.size.should == 1
        post.last_version_at.should == first_version_at
      end

    end

    describe 'revision much later' do

      let!(:revised_at) { post.updated_at + 2.minutes }

      before do
        SiteSetting.stubs(:ninja_edit_window).returns(1.minute.to_i)
        post.revise(post.user, 'updated body', revised_at: revised_at)
        post.reload
      end

      it 'updates the cached_version' do
        post.cached_version.should == 2
        post.all_versions.size.should == 2
        post.last_version_at.to_i.should == revised_at.to_i
      end

      describe "new edit window" do

        before do
          post.revise(post.user, 'yet another updated body', revised_at: revised_at)
          post.reload
        end

        it "doesn't create a new version if you do another" do
          post.cached_version.should == 2
        end

        it "doesn't change last_version_at" do
          post.last_version_at.to_i.should == revised_at.to_i
        end

        context "after second window" do

          let!(:new_revised_at) {revised_at + 2.minutes}

          before do
            post.revise(post.user, 'yet another, another updated body', revised_at: new_revised_at)
            post.reload
          end

          it "does create a new version after the edit window" do
            post.cached_version.should == 3
          end

          it "does create a new version after the edit window" do
            post.last_version_at.to_i.should == new_revised_at.to_i
          end

        end


      end

    end

    describe 'rate limiter' do
      let(:changed_by) { Fabricate(:coding_horror) }

      it "triggers a rate limiter" do
        EditRateLimiter.any_instance.expects(:performed!)
        post.revise(changed_by, 'updated body')
      end
    end

    describe 'with a new body' do
      let(:changed_by) { Fabricate(:coding_horror) }
      let!(:result) { post.revise(changed_by, 'updated body') }

      it 'acts correctly' do
        result.should be_true
        post.raw.should == 'updated body'
        post.invalidate_oneboxes.should == true
        post.cached_version.should == 2
        post.all_versions.size.should == 2
        post.versions.should be_present
        post.versions.first.user.should be_present
      end

      context 'second poster posts again quickly' do
        before do
          SiteSetting.expects(:ninja_edit_window).returns(1.minute.to_i)
          post.revise(changed_by, 'yet another updated body', revised_at: post.updated_at + 10.seconds)
          post.reload
        end

        it 'is a ninja edit, because the second poster posted again quickly' do
          post.cached_version.should == 2
          post.all_versions.size.should == 2
        end

      end

    end
  end


  describe 'after save' do

    let(:post) { Fabricate(:post, post_args) }

    it "has correct info set" do
      post.user_deleted?.should be_false
      post.post_number.should be_present
      post.excerpt.should be_present
      post.post_type.should == Post.types[:regular]
      post.versions.should be_blank
      post.cooked.should be_present
      post.external_id.should be_present
      post.quote_count.should == 0
      post.replies.should be_blank
    end

    describe 'a forum topic user record for the topic' do

      let(:topic_user) { post.user.topic_users.where(topic_id: topic.id).first }

      it 'is set correctly' do
        topic_user.should be_present
        topic_user.should be_posted
        topic_user.last_read_post_number.should == post.post_number
        topic_user.seen_post_count.should == post.post_number
      end

    end

    describe 'extract_quoted_post_numbers' do

      let!(:post) { Fabricate(:post, post_args) }
      let(:reply) { Fabricate.build(:post, post_args) }

      it "finds the quote when in the same topic" do
        reply.raw = "[quote=\"EvilTrout, post:#{post.post_number}, topic:#{post.topic_id}\"]hello[/quote]"
        reply.extract_quoted_post_numbers
        reply.quoted_post_numbers.should == [post.post_number]
      end

      it "doesn't find the quote in a different topic" do
        reply.raw = "[quote=\"EvilTrout, post:#{post.post_number}, topic:#{post.topic_id+1}\"]hello[/quote]"
        reply.extract_quoted_post_numbers
        reply.quoted_post_numbers.should be_blank
      end

    end

    describe 'a new reply' do

      let(:topic) { Fabricate(:topic) }
      let(:other_user) { Fabricate(:coding_horror) }
      let(:reply_text) { "[quote=\"Evil Trout, post:1\"]\nhello\n[/quote]\nHmmm!"}
      let!(:post) { PostCreator.new(topic.user, raw: Fabricate.build(:post).raw, topic_id: topic.id).create }
      let!(:reply) { PostCreator.new(other_user, raw: reply_text, topic_id: topic.id, reply_to_post_number: post.post_number ).create }

      it 'has a quote' do
        reply.quote_count.should == 1
      end

      it "isn't quoteless" do
        reply.should_not be_quoteless
      end

      it 'has a reply to the user of the original user' do
        reply.reply_to_user.should == post.user
      end

      it 'increases the reply count of the parent' do
        post.reload
        post.reply_count.should == 1
      end

      it 'increases the reply count of the topic' do
        topic.reload
        topic.reply_count.should == 1
      end

      it 'is the child of the parent post' do
        post.replies.should == [reply]
      end


      it "doesn't change the post count when you edit the reply" do
        reply.raw = 'updated raw'
        reply.save
        post.reload
        post.reply_count.should == 1
      end

      context 'a multi-quote reply' do

        let!(:multi_reply) do
          raw = "[quote=\"Evil Trout, post:1\"]post1 quote[/quote]\nAha!\n[quote=\"Evil Trout, post:2\"]post2 quote[/quote]\nNeat-o"
          PostCreator.new(other_user, raw: raw, topic_id: topic.id, reply_to_post_number: post.post_number).create
        end

        it 'has the correct info set' do
          multi_reply.quote_count.should == 2
          post.replies.include?(multi_reply).should be_true
          reply.replies.include?(multi_reply).should be_true
        end
      end

    end

  end

  context 'best_of' do
    let!(:p1) { Fabricate(:post, post_args.merge(score: 4, percent_rank: 0.33)) }
    let!(:p2) { Fabricate(:post, post_args.merge(score: 10, percent_rank: 0.66)) }
    let!(:p3) { Fabricate(:post, post_args.merge(score: 5, percent_rank: 0.99)) }

    it "returns the OP and posts above the threshold in best of mode" do
      SiteSetting.stubs(:best_of_percent_filter).returns(66)
      Post.best_of.order(:post_number).should == [p1, p2]
    end

  end


  context 'sort_order' do

    context 'regular topic' do

      let!(:p1) { Fabricate(:post, post_args) }
      let!(:p2) { Fabricate(:post, post_args) }
      let!(:p3) { Fabricate(:post, post_args) }

      it 'defaults to created order' do
        Post.regular_order.should == [p1, p2, p3]
      end
    end

  end

  describe '#readable_author' do
    it 'delegates to the associated user' do
      User.any_instance.expects(:readable_name)
      Fabricate(:post).author_readable
    end
  end

  describe 'urls' do
    it 'no-ops for empty list' do
      Post.urls([]).should == {}
    end

    # integration test -> should move to centralized integration test
    it 'finds urls for posts presented' do
      p1 = Fabricate(:post)
      p2 = Fabricate(:post)
      Post.urls([p1.id, p2.id]).should == {p1.id => p1.url, p2.id => p2.url}
    end
  end

end
