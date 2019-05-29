json.extract! playlist, :id, :name
json.songs playlist.songs

playlist.songs.each do |song|
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
  end
end


# json.albumPhoto playlist.songs[0].album.photo

# why :ids? and not :id?
# json.extract! playlist.playlists_users, :ids