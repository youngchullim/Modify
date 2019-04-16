class Api::PlaylistsUserController < ApplicationController
  def index
    @user = User.find_by(id: params[:id])
    @playlists_users = @user.playlists_users.map { |playlist| Playlist.find_by(id: playlist.playlist_id) }
    render :index
  end
  
  def create
    @playlists_user = PlaylistsUser.new(playlists_user_params)
    if @playlists_user.save
      @user = User.find_by(id: @playlists_user.user_id)
      render json: ["Saved to Library"], status: 200
    else
      render json: ["Unable to Save to Library"], status: 404
    end
  end

  def destroy
    @playlists_user = PlaylistsUser.find_by(id: params[:id])
    @user = User.find_by(id: @playlists_user.user_id)

    @playlists_user.destroy
    render json: ["Removed from Library"], status: 200
  end

  private
  def playlists_user_params
    params.require(:playlists_user).permit(:playlist_id, :user_id)
  end
end
