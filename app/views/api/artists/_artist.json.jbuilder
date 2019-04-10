json.extract! artist, :id, :name
# json.extract! artist, :id, :name, :bio
json.albums artist.albums
json.songs artist.album_songs

# Album URL
json.photo artist.photo
