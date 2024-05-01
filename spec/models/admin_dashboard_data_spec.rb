# frozen_string_literal: true

RSpec.describe AdminDashboardData do
  after { Discourse.redis.flushdb }

  describe "adding scheduled checks" do
    it "does not add duplicate problems with the same identifier" do
      prob1 = ProblemCheck::Problem.new("test problem", identifier: "test")
      prob2 = ProblemCheck::Problem.new("test problem 2", identifier: "test")
      AdminDashboardData.add_found_scheduled_check_problem(prob1)
      AdminDashboardData.add_found_scheduled_check_problem(prob2)
      expect(AdminDashboardData.load_found_scheduled_check_problems.map(&:to_s)).to eq(
        ["test problem"],
      )
    end

    it "does not error when loading malformed problems saved in redis" do
      Discourse.redis.rpush(AdminDashboardData::SCHEDULED_PROBLEM_STORAGE_KEY, "{ 'badjson")
      expect(AdminDashboardData.load_found_scheduled_check_problems).to eq([])
    end

    it "clears a specific problem by identifier" do
      prob1 = ProblemCheck::Problem.new("test problem 1", identifier: "test")
      AdminDashboardData.add_found_scheduled_check_problem(prob1)
      AdminDashboardData.clear_found_problem("test")
      expect(AdminDashboardData.load_found_scheduled_check_problems).to eq([])
    end

    it "defaults to low priority, and uses low priority if an invalid priority is passed" do
      prob1 = ProblemCheck::Problem.new("test problem 1")
      prob2 = ProblemCheck::Problem.new("test problem 2", priority: "superbad")
      expect(prob1.priority).to eq("low")
      expect(prob2.priority).to eq("low")
    end
  end

  describe "stats cache" do
    include_examples "stats cacheable"
  end
end
