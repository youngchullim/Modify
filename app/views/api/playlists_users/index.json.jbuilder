@playlists_users.each do |playlist|
  json.set! playlist.id do
    json.id playlist.id
    json.name playlist.name
    json.private playlist.private
    json.songIds playlist.songs.map { |song| song.id }
    json.playlistSongIds playlist.playlists_songs.map { |song| song.id }
  end
end
