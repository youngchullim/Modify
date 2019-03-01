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

FactoryBot.define do
  factory :artists_user do
    
  end
end
