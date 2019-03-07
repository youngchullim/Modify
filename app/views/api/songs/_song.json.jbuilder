json.extract! song, :id, :title, :year, :genre, :album_id
json.artist song.album_artist.name
json.album song.album.title

# SONG URL
json.songUrl url_for(song.song)
json.albumUrl url_for(song.album.photo)