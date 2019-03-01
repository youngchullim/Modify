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

FactoryBot.define do
  factory :songs_user do
    
  end
end
