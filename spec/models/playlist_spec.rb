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

require 'rails_helper'

RSpec.describe Playlist, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
