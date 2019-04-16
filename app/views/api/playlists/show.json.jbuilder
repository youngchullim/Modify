json.partial! 'api/playlists/playlist', playlist: @playlist

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