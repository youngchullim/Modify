if song
  json.song do 
    # json.extract! song, :id, :title, :year, :genre, :album_id, :duration
    json.id song.id
    json.title song.title
    json.year song.year
    json.genre song.genre
    json.albumId song.album_id
    json.duration song.duration
    json.artist song.album_artist
    json.album song.album
    json.playlists song.playlists

    # SONG URL
    json.songUrl song.song
    json.albumPhoto song.album.photo
    json.songsUsers song.songs_users
  end
end