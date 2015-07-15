require 'spec_helper'
require_dependency 'js_locale_helper'

describe JsLocaleHelper do
  it 'should be able to generate translations' do
    expect(JsLocaleHelper.output_locale('en').length).to be > 0
  end

  def setup_message_format(format)
    @ctx = V8::Context.new
    @ctx.eval('MessageFormat = {locale: {}};')
    @ctx.load(Rails.root + 'lib/javascripts/locale/en.js')
    compiled = JsLocaleHelper.compile_message_format('en', format)
    @ctx.eval("var test = #{compiled}")
  end

  def localize(opts)
    @ctx.eval("test(#{opts.to_json})")
  end

  it 'handles plurals' do
    setup_message_format('{NUM_RESULTS, plural,
            one {1 result}
          other {# results}
        }')
    expect(localize(NUM_RESULTS: 1)).to eq('1 result')
    expect(localize(NUM_RESULTS: 2)).to eq('2 results')
  end

  it 'handles double plurals' do
    setup_message_format('{NUM_RESULTS, plural,
            one {1 result}
          other {# results}
        } and {NUM_APPLES, plural,
            one {1 apple}
          other {# apples}
        }')


    expect(localize(NUM_RESULTS: 1, NUM_APPLES: 2)).to eq('1 result and 2 apples')
    expect(localize(NUM_RESULTS: 2, NUM_APPLES: 1)).to eq('2 results and 1 apple')
  end

  it 'handles select' do
    setup_message_format('{GENDER, select, male {He} female {She} other {They}} read a book')
    expect(localize(GENDER: 'male')).to eq('He read a book')
    expect(localize(GENDER: 'female')).to eq('She read a book')
    expect(localize(GENDER: 'none')).to eq('They read a book')
  end

  it 'can strip out message formats' do
    hash = {"a" => "b", "c" => { "d" => {"f_MF" => "bob"} }}
    expect(JsLocaleHelper.strip_out_message_formats!(hash)).to eq({"c.d.f_MF" => "bob"})
    expect(hash["c"]["d"]).to eq({})
  end

  it 'handles message format special keys' do
    ctx = V8::Context.new
    ctx.eval("I18n = {};")
    ctx.eval(JsLocaleHelper.output_locale('en',
    {
      "en" =>
      {
        "js" => {
          "hello" => "world",
          "test_MF" => "{HELLO} {COUNT, plural, one {1 duck} other {# ducks}}",
          "error_MF" => "{{BLA}",
          "simple_MF" => "{COUNT, plural, one {1} other {#}}"
        }
      }
    }))

    expect(ctx.eval('I18n.translations')["en"]["js"]["hello"]).to eq("world")
    expect(ctx.eval('I18n.translations')["en"]["js"]["test_MF"]).to eq(nil)

    expect(ctx.eval('I18n.messageFormat("test_MF", { HELLO: "hi", COUNT: 3 })')).to eq("hi 3 ducks")
    expect(ctx.eval('I18n.messageFormat("error_MF", { HELLO: "hi", COUNT: 3 })')).to match(/Invalid Format/)
    expect(ctx.eval('I18n.messageFormat("missing", {})')).to match(/missing/)
    expect(ctx.eval('I18n.messageFormat("simple_MF", {})')).to match(/COUNT/) # error
  end

  it 'load pluralizations rules before precompile' do
    message = JsLocaleHelper.compile_message_format('ru', 'format')
    expect(message).not_to match 'Plural Function not found'
  end

  it 'performs fallbacks to english if a translation is not available' do
    skip('todo: write test')
  end

  LocaleSiteSetting.values.each do |locale|
    it "generates valid date helpers for #{locale[:value]} locale" do
      js = JsLocaleHelper.output_locale(locale[:value])
      ctx = V8::Context.new
      ctx.eval('var window = this;')
      ctx.load(Rails.root + 'app/assets/javascripts/locales/i18n.js')
      ctx.eval(js)
    end
  end

end
