@artists_users.each do |artist|
  json.set! artist.id do
    json.id artist.id
    json.name artist.name
    json.biography artist.biography
    json.artistPhoto artist.photo
    json.genre artist.genre
    json.albumIds artist.albums.map { |album| album.id }
    json.songIds artist.album_songs.map { |song| song.id }
    json.songs artist.album_songs
    json.albums artist.albums
  end
end