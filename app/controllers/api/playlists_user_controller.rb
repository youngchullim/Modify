class Api::PlaylistsUserController < ApplicationController
  def create
    
  end

  def destroy
    
  end

  private
  def playlists_user_params
    params.require(:playlists_user).permit(:playlist_id, :user_id)
  end
end
