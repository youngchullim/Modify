json.extract! playlist, :id, :name
json.song playlist.songs
json.photo playlist.songs.album.photo

# why :ids? and not :id?
# json.extract! playlist.playlists_users, :ids