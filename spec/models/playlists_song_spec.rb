# == Schema Information
#
# Table name: playlists_songs
#
#  id          :bigint(8)        not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe PlaylistsSong, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
