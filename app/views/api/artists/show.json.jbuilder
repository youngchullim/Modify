json.partial! 'api/artists/artist', artist: @artist

@artists_users.each do |artist|
  json.set! artist.id do
    json.id artist.id
    json.name artist.name
    json.biography artist.biography
    json.genre artist.genre
    json.albums artist.albums
    json.songs artist.album_songs
    json.photo artist.photo
  end
end

json.artistsUsersIds @artist.artists_users.map {|artistsUser| artistsUser.user.id }
json.artistsUsers @artist.artists_users.map {|artistsUser| artistsUser}
