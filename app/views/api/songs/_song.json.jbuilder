json.extract! song, :id, :title, :year, :genre, :album_id, :duration
json.artist song.album_artist
json.album song.album
json.playlists song.playlists

# SONG URL
json.songUrl song.song
json.albumUrl song.album.photo

json.songsUsers song.songs_users