class Api::PlaylistsSongsController < ApplicationController
  def index
    @playlist = Playlist.find_by(id: params[:playlist_id])
    @playlists_songs = @playlist.playlists_songs.map {|song| Song.find_by(id: song.song_id)}
    render :index
  end
  
  def create
    @playlists_song = PlaylistsSong.new(playlists_song_params)

    if @playlists_song.save
      render json: ["Saved to Playlist"], status: 200
    else
      render json: ["Unable to Save to Playlist"], status: 404
    end
  end

  def destroy
    @playlists_song = PlaylistsSong.find_by(id: params[:id])

    if @playlists_song.destroy
      @playlist = Playlist.find_by(id: @playlists_song.playlist_id)
      @playlist_song_ids = @playlist.songs.map { |song| song.id}
      # @user = User.find_by(id: @playlist.playlists_users.user_id)
      render json: ["Removed from Playlist"], status: 200
    end
  end

  private
  def playlists_song_params
    params.require(:playlistsSong).permit(:playlist_id, :song_id)
  end
end
