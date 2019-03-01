# == Schema Information
#
# Table name: playlists_users
#
#  id          :bigint(8)        not null, primary key
#  playlist_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistsUser < ApplicationRecord

  belongs_to :playlist,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :Playlist

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
