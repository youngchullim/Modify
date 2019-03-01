# == Schema Information
#
# Table name: artists_users
#
#  id         :bigint(8)        not null, primary key
#  artist_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ArtistsUser < ApplicationRecord
  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
