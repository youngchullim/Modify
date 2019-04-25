json.extract! album, :id, :title, :year, :artist_id
json.artist album.artist
json.songs album.songs
json.title album.title
json.year album.year
json.id album.id
json.artistId album.artist_id


# Album URL
json.photo album.photo
