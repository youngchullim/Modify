# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  photo      :string
#

class Album < ApplicationRecord
  validates :title, presence: true
  validates :year, presence: true

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist
  
  has_many :songs,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Song

  has_many :albums_users,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :AlbumsUser

  # ACTIVE STORAGE PHOTO
  # instead just add photo column to Albums table
  # has_one_attached :photo
end
