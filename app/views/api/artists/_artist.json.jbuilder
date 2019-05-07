json.extract! artist, :id, :name, :biography, :genre
json.albums artist.albums
json.songs artist.album_songs

# Album URL
json.photo artist.photo
