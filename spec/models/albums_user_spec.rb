# == Schema Information
#
# Table name: albums_users
#
#  id         :bigint(8)        not null, primary key
#  album_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe AlbumsUser, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
