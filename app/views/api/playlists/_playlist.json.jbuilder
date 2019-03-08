json.extract! playlist, :id, :name
json.songs playlist.songs
# json.photo playlist.songs[0].album.photo

# why :ids? and not :id?
# json.extract! playlist.playlists_users, :ids