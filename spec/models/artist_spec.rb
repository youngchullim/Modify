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

require 'rails_helper'

RSpec.describe Artist, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
