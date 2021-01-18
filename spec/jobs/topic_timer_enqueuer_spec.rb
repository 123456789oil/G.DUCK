# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Jobs::TopicTimerEnqueuer do
  subject { described_class.new }

  fab!(:timer1) do
    Fabricate(:topic_timer, execute_at: 1.minute.ago, created_at: 1.hour.ago, status_type: TopicTimer.types[:close])
  end
  fab!(:timer2) do
    Fabricate(:topic_timer, execute_at: 1.minute.ago, created_at: 1.hour.ago, status_type: TopicTimer.types[:open])
  end
  fab!(:future_timer) do
    Fabricate(:topic_timer, execute_at: 1.hours.from_now, created_at: 1.hour.ago, status_type: TopicTimer.types[:close])
  end
  fab!(:deleted_timer) do
    Fabricate(:topic_timer, execute_at: 1.minute.ago, created_at: 1.hour.ago, status_type: TopicTimer.types[:close])
  end

  before do
    deleted_timer.trash!
  end

  it "does not enqueue deleted timers" do
    expect_not_enqueued_with(job: :close_topic, args: { topic_timer_id: deleted_timer.id })
    subject.execute
    expect(deleted_timer.topic.reload.closed?).not_to eq(true)
  end

  it "does not enqueue future timers" do
    expect_not_enqueued_with(job: :close_topic, args: { topic_timer_id: future_timer.id })
    subject.execute
    expect(future_timer.topic.reload.closed?).not_to eq(true)
  end

  it "enqueues the related job" do
    expect_not_enqueued_with(job: :close_topic, args: { topic_timer_id: deleted_timer.id })
    expect_not_enqueued_with(job: :close_topic, args: { topic_timer_id: future_timer.id })
    subject.execute
    expect_job_enqueued(job: :close_topic, args: { topic_timer_id: timer1.id })
    expect_job_enqueued(job: :open_topic, args: { topic_timer_id: timer2.id })
  end

  it "does not re-enqueue a job that has already been scheduled ahead of time in sidekiq (legacy topic timers)" do
    expect_not_enqueued_with(job: :close_topic, args: { topic_timer_id: timer1.id })
    Jobs.enqueue_at(1.hours.from_now, :close_topic, topic_timer_id: timer1.id)
    subject.execute
  end
end
