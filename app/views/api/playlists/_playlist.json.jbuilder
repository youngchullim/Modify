json.extract! playlist, :id, :name
json.song playlist.songs

# why :ids? and not :id?
# json.extract! playlist.playlists_users, :ids