@songs_users.each do |song|
  json.set! song.id do 
    json.id song.id
    json.title song.title
    json.year song.year
    json.genre song.genre
    json.songUrl song.song
    json.duration song.duration
    json.album song.album
    json.albumId song.album.id
    json.albumPhoto song.album.photo
    json.artist song.album_artist
    json.artistId song.album_artist.id
    json.artistPhoto song.album_artist.photo

    json.songsUsersIds song.songs_users.map {|songsUser| songsUser.user.id}
    json.songsUsers song.songs_users.map {|songsUser| songsUser}
  end
end
