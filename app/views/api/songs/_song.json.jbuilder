json.extract! song, :id, :title, :year, :genre, :album_id
json.artist song.album_artist
json.album song.album
json.playlists song.playlists

# SONG URL
json.songUrl url_for(song.song)
json.albumUrl url_for(song.album.photo)