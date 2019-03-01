# == Schema Information
#
# Table name: playlists_songs
#
#  id          :bigint(8)        not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryBot.define do
  factory :playlists_song do
    
  end
end
