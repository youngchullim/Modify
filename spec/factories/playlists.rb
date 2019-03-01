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

FactoryBot.define do
  factory :playlist do
    
  end
end
