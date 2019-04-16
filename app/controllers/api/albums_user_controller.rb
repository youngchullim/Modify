class Api::AlbumsUserController < ApplicationController
  def index 
    @user = User.find_by(id: params[:user_id])
    @albums_users = @user.albums_users.map { |album| Album.find_by(id: album.album_id) }
    render :index
  end

  def create
    @albums_user = AlbumsUser.new(albums_user_params)
    if @albums_user.save
      @user = User.find_by(id: @albums_user.user_id)
      render json: ["Saved to Library"], status: 200
    else
      render json: ["Unable to Save to Library"], status: 404
    end
  end

  def destroy
    @albums_user = AlbumsUser.find_by(id: params[:id])
    @user = User.find_by(id: @albums_user.user_id)

    @albums_user.destroy
    render json: ["Removed from Library"], status: 200
  end

  private
  def albums_user_params 
    params.require(:albums_user).permit(:album_id, :user_id)
  end
end
