# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  biography  :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  photo      :string
#  genre      :string
#

FactoryBot.define do
  factory :artist do
    
  end
end
