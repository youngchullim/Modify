# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  private    :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :name, presence: true
  validates :private, inclusion: { in: [ true, false ] }

  has_many :playlists_users,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :PlaylistsUser

  has_many :playlists_songs,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :PlaylistsSong
  
end
