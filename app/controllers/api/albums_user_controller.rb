class Api::AlbumsUserController < ApplicationController
  def index
    
  end

  def create
  end

  def destroy
  end

  private
  def albums_user_params 
    params.require(:albums_user).permit(:album_id, :user_id)
  end
end
