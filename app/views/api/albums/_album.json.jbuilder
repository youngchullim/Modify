json.extract! album, :id, :title, :year, :artist_id
json.artist album.artist
json.songs album.songs

# Album URL
json.photo album.photo
