# frozen_string_literal: true

module HTMLSpecHelper
  def fake(uri, response, verb = :get)
    FakeWeb.register_uri(verb, uri, response: http_ok(response))
  end

  def http_ok(html)
    "HTTP/1.1 200 OK\n\n#{html}"
  end

  def onebox_view(html)
    %|<div class="onebox">#{html}</div>|
  end

  def response(file)
    file = File.join("spec", "fixtures", "onebox", "#{file}.response")
    File.exist?(file) ? File.read(file) : ""
  end

  def inspect_html_fragment(raw_fragment, tag_name, attribute = 'src')
    preview = Nokogiri::HTML::DocumentFragment.parse(raw_fragment)

    preview.css(tag_name).first[attribute]
  end
end
