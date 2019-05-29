# json.extract! artist, :id, :name, :biography, :genre
json.albums artist.albums
json.songs artist.album_songs
json.id artist.id
json.name artist.name
json.biography artist.biography
json.genre artist.genre

# Album URL
json.artistPhoto artist.photo
