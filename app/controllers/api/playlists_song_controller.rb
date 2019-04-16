class Api::PlaylistsSongController < ApplicationController
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
      @user = User.find_by(id: @playlist.playlists_users.user_id)
      render json: ["Removed from Playlist"], status: 200
    end
  end

  private
  def playlists_song_params
    params.require(:playlists_song).permit(:playlist_id, :song_id)
  end
end
