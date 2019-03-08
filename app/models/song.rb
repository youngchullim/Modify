# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  genre      :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, presence: true
  validates :year, presence: true
  validates :genre, presence: true

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album

  has_many :playlists_songs,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :PlaylistsSong

  has_many :songs_users,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :SongsUser

  has_one :album_artist,
    through: :album,
    source: :artist

  has_many :playlists,
    through: :playlists_songs,
    source: :playlist
  
  # ACTIVE STOARGE
  # instead just add song column to Songs table
  # has_one_attached :song
end
