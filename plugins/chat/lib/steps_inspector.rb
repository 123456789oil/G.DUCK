# frozen_string_literal: true

module Chat
  # = Chat::StepsInspector
  #
  # This class takes a {Chat::Service::Base::Context} object and inspects it.
  # It will output a list of steps and what is their known state.
  class StepsInspector
    # @!visibility private
    class Step
      attr_reader :step, :result, :nesting_level

      delegate :name, to: :step
      delegate :failure?, :success?, to: :step_result, allow_nil: true

      def self.for(step, result, nesting_level: 0)
        class_name =
          "#{module_parent_name}::#{step.class.name.split("::").last.sub(/^(\w+)Step$/, "\\1")}"
        class_name.constantize.new(step, result, nesting_level: nesting_level)
      end

      def initialize(step, result, nesting_level: 0)
        @step = step
        @result = result
        @nesting_level = nesting_level
      end

      def type
        self.class.name.split("::").last.downcase
      end

      def emoji
        return "❌" if failure?
        return "✅" if success?
        ""
      end

      def error
        ""
      end

      def steps
        [self]
      end

      def inspect
        "#{"  " * nesting_level}[#{type}] '#{name}' #{emoji}"
      end

      private

      def step_result
        nil
      end
    end

    # @!visibility private
    class Model < Step
      def step_result
        result[:"result.#{name}"]
      end

      def success?
        result[name]
      end

      def error
        step_result.exception.full_message
      end
    end

    # @!visibility private
    class Contract < Step
      def step_result
        result[:"result.contract.#{name}"]
      end

      def error
        step_result.errors.inspect
      end
    end

    # @!visibility private
    class Policy < Step
      def step_result
        result[:"result.policy.#{name}"]
      end
    end

    # @!visibility private
    class Transaction < Step
      def steps
        [self, *step.steps.map { Step.for(_1, result, nesting_level: nesting_level + 1).steps }]
      end

      def inspect
        "#{"  " * nesting_level}[#{type}]"
      end
    end

    attr_reader :steps, :result

    def initialize(result)
      @steps = result.__steps__.map { Step.for(_1, result).steps }.flatten
      @result = result
    end

    # Inspect the provided result object.
    # Example output:
    #   [1/4] [model] 'channel' ✅
    #   [2/4] [contract] 'default' ✅
    #   [3/4] [policy] 'check_channel_permission' ❌
    #   [4/4] [step] 'change_status'
    # @return [String] the steps of the result object with their state
    def inspect
      steps
        .map
        .with_index { |step, index| "[#{index + 1}/#{steps.size}] #{step.inspect}" }
        .join("\n")
    end

    # @return [String, nil] the first available error, if any.
    def error
      steps.detect(&:failure?)&.error
    end
  end
end
