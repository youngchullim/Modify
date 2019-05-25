@songs.each do |song|
  json.set! song.id do
    # json.partial! 'song', song: song
    json.id song.id
    json.title song.title
    json.year song.year
    json.genre song.genre
    json.albumId song.album_id
    json.duration song.duration
    json.artist song.album_artist
    json.album song.album
    json.playlists song.playlists

    json.songUrl song.song
    json.albumPhoto song.album.photo
    json.songsUsers song.songs_users
  end
end

