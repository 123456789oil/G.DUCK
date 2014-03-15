require 'spec_helper'
require_dependency 'discourse_hub'

describe DiscourseHub do
  describe '#username_available?' do
    it 'should return true when username is available and no suggestion' do
      RestClient.stubs(:get).returns( {success: 'OK', available: true}.to_json )
      DiscourseHub.username_available?('MacGyver').should == [true, nil]
    end

    it 'should return false and a suggestion when username is not available' do
      RestClient.stubs(:get).returns( {success: 'OK', available: false, suggestion: 'MacGyver1'}.to_json )
      available, suggestion = DiscourseHub.username_available?('MacGyver')
      available.should be_false
      suggestion.should_not be_nil
    end

    # How to handle connect errors? timeout? 401? 403? 429?
  end

  describe '#username_match?' do
    it 'should return true when it is a match and no suggestion' do
      RestClient.stubs(:get).returns( {success: 'OK', match: true, available: false}.to_json )
      DiscourseHub.username_match?('MacGyver', 'macg@example.com').should == [true, false, nil]
    end

    it 'should return false and a suggestion when it is not a match and the username is not available' do
      RestClient.stubs(:get).returns( {success: 'OK', match: false, available: false, suggestion: 'MacGyver1'}.to_json )
      match, available, suggestion = DiscourseHub.username_match?('MacGyver', 'macg@example.com')
      match.should be_false
      available.should be_false
      suggestion.should_not be_nil
    end

    it 'should return false and no suggestion when it is not a match and the username is available' do
      RestClient.stubs(:get).returns( {success: 'OK', match: false, available: true}.to_json )
      match, available, suggestion = DiscourseHub.username_match?('MacGyver', 'macg@example.com')
      match.should be_false
      available.should be_true
      suggestion.should be_nil
    end
  end

  describe '#register_username' do
    it 'should return true when registration succeeds' do
      RestClient.stubs(:post).returns( {success: 'OK'}.to_json )
      DiscourseHub.register_username('MacGyver', 'macg@example.com').should be_true
    end

    it 'should return raise an exception when registration fails' do
      RestClient.stubs(:post).returns( {failed: -200}.to_json )
      expect {
        DiscourseHub.register_username('MacGyver', 'macg@example.com')
      }.to raise_error(DiscourseHub::UsernameUnavailable)
    end
  end

  describe '#unregister_username' do
    it 'should return true when unregister succeeds' do
      RestClient.stubs(:delete).returns( {success: 'OK'}.to_json )
      DiscourseHub.unregister_username('byebye').should be_true
    end

    it 'should return false when unregister fails' do
      RestClient.stubs(:delete).returns( {failed: -20}.to_json )
      DiscourseHub.unregister_username('byebye').should be_false
    end
  end

  describe '#discourse_version_check' do
    it 'should return just return the json that the hub returns' do
      hub_response = {'success' => 'OK', 'latest_version' => '0.8.1', 'critical_updates' => false}
      RestClient.stubs(:get).returns( hub_response.to_json )
      DiscourseHub.discourse_version_check.should == hub_response
    end
  end

  describe '#change_username' do
    it 'should return true when username is changed successfully' do
      RestClient.stubs(:put).returns( {success: 'OK'}.to_json )
      DiscourseHub.change_username('MacGyver', 'MacG').should be_true
    end

    it 'should return raise UsernameUnavailable when username is not available' do
      RestClient.stubs(:put).returns( {failed: -200}.to_json )
      expect {
        DiscourseHub.change_username('MacGyver', 'MacG')
      }.to raise_error(DiscourseHub::UsernameUnavailable)
    end


    # it 'should return raise UsernameUnavailable when username does not belong to this forum' do
    #   RestClient.stubs(:put).returns( {failed: -13}.to_json )
    #   expect {
    #      DiscourseHub.change_username('MacGyver', 'MacG')
    #   }.to raise_error(DiscourseHub::ActionForbidden)
    # end

    # it 'should return raise UsernameUnavailable when username does not belong to this forum' do
    #   RestClient.stubs(:put).returns( {failed: -13}.to_json )
    #   expect {
    #     DiscourseHub.change_username('MacGyver', 'MacG')
    #   }.to raise_error(DiscourseHub::ActionForbidden)
    # end
  end
end
