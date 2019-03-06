json.extract! song, :id, :title, :year, :genre, :album_id
json.extract! song.album_artist, :id

# SONG URL
json.songUrl url_for(song.song)
json.albumUrl url_for(song.album.photo)