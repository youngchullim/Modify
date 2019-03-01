# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  biography  :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  validates :name, presence: true
  validates :biography, presence: true

  has_many :albums,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album

  has_many :artists_users,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :ArtistsUser

  has_many :album_songs,
    through: :albums,
    source: :songs
    
end
