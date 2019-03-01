# == Schema Information
#
# Table name: songs_users
#
#  id         :bigint(8)        not null, primary key
#  song_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SongsUser < ApplicationRecord
  belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song
    
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
