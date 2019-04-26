@playlists_songs.each do |playlist|
  json.set! playlist.id do
    json.id playlist.id
    json.song playlist.song
    json.playlist playlist.playlist
  end
end

json.playlist do
  json.id @playlist.id
  json.name @playlist.name
  json.private @playlist.private
  json.songIds @playlist.songs.map { |song| song.id }
  json.playlistSongIds @playlist.playlists_songs.map { |song| song.id }
end

@playlist.songs.each do |song|
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