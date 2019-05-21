json.extract! user, :id, :email

if currentSong
  json.currentSong do 
    json.song do
      json.id currentSong.id
      json.title currentSong.id
      json.songUrl currentSong.song
      json.album currentSong.album
      json.artist currentSong.album_artist
      json.albumUrl currentSong.album.photo
    end
  end
end