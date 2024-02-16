# frozen_string_literal: true

RSpec.describe ThemeSettingsObjectValidator do
  describe "#validate" do
    it "should return the right hash of error messages when properties are required but missing" do
      schema = {
        name: "section",
        properties: {
          title: {
            type: "string",
            required: true,
          },
          description: {
            type: "string",
            required: true,
          },
          links: {
            type: "objects",
            schema: {
              name: "link",
              properties: {
                name: {
                  type: "string",
                  required: true,
                },
                child_links: {
                  type: "objects",
                  schema: {
                    name: "child_link",
                    properties: {
                      title: {
                        type: "string",
                        required: true,
                      },
                      not_required: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }

      errors = described_class.new(schema:, object: {}).validate

      expect(errors).to eq(title: ["must be present"], description: ["must be present"])

      errors =
        described_class.new(
          schema: schema,
          object: {
            links: [{ child_links: [{}, {}] }, {}],
          },
        ).validate

      expect(errors).to eq(
        title: ["must be present"],
        description: ["must be present"],
        links: [
          {
            name: ["must be present"],
            child_links: [{ title: ["must be present"] }, { title: ["must be present"] }],
          },
          { name: ["must be present"] },
        ],
      )
    end

    context "for enum properties" do
      let(:schema) do
        {
          name: "section",
          properties: {
            enum_property: {
              type: "enum",
              choices: ["choice 1", 2, false],
            },
          },
        }
      end
      it "should return the right hash of error messages when value of property is not in the enum" do
        expect(
          described_class.new(schema: schema, object: { enum_property: "random_value" }).validate,
        ).to eq(enum_property: ["must be one of the following: [\"choice 1\", 2, false]"])
      end

      it "should return the right hash of error messages when enum property is not present" do
        expect(described_class.new(schema: schema, object: {}).validate).to eq(
          enum_property: ["must be one of the following: [\"choice 1\", 2, false]"],
        )
      end
    end

    context "for boolean properties" do
      let(:schema) { { name: "section", properties: { boolean_property: { type: "boolean" } } } }

      it "should return the right hash of error messages when value of property is not of type boolean" do
        expect(
          described_class.new(schema: schema, object: { boolean_property: "string" }).validate,
        ).to eq(boolean_property: ["must be a boolean"])
      end
    end

    context "for float properties" do
      let(:schema) { { name: "section", properties: { float_property: { type: "float" } } } }

      it "should return the right hash of error messages when value of property is not of type float" do
        expect(
          described_class.new(schema: schema, object: { float_property: "string" }).validate,
        ).to eq(float_property: ["must be a float"])
      end
    end

    context "for integer properties" do
      let(:schema) { { name: "section", properties: { integer_property: { type: "integer" } } } }

      it "should return the right hash of error messages when value of property is not of type integer" do
        expect(
          described_class.new(schema: schema, object: { integer_property: "string" }).validate,
        ).to eq(integer_property: ["must be an integer"])
      end
    end

    context "for string properties" do
      let(:schema) { { name: "section", properties: { string_property: { type: "string" } } } }

      it "should return the right hash of error messages when value of property is not of type string" do
        expect(described_class.new(schema: schema, object: { string_property: 1 }).validate).to eq(
          string_property: ["must be a string"],
        )
      end
    end
  end
end
