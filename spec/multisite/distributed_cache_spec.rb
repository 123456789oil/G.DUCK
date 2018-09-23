require 'rails_helper'

RSpec.describe 'Multisite SiteSettings', type: :multisite do
  let(:conn) { RailsMultisite::ConnectionManagement }

  def cache(name, namespace: true)
    DistributedCache.new(name, namespace: namespace)
  end

  context 'without namespace' do
    let(:cache1) { cache('test', namespace: false) }

    it 'does not leak state across multisite' do
      cache1['default'] = true

      expect(cache1.hash).to eq('default' => true)

      conn.with_connection('second') do
        message = MessageBus.track_publish(DistributedCache::Manager::CHANNEL_NAME) do
          cache1['second'] = true
        end.first

        expect(message.data[:hash_key]).to eq('test')
        expect(message.data[:op]).to eq(:set)
        expect(message.data[:key]).to eq('second')
        expect(message.data[:value]).to eq(true)
      end

      expect(cache1.hash).to eq('default' => true, 'second' => true)
    end
  end
end
