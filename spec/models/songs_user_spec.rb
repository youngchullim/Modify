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

require 'rails_helper'

RSpec.describe SongsUser, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
