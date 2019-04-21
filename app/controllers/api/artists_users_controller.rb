class Api::ArtistsUsersController < ApplicationController
  def index 
    @user = User.find_by(id: params[:user_id])
    @artists_users = @user.artists_users.map { |artist| Artist.find_by(id: artist.artist_id) }
    render :index
  end

  def create
    @artists_user = ArtistsUser.new(artists_user_params)
    if @artists_user.save
      @user = User.find_by(id: @artists_user.user_id)
      render json: ["Saved to Library"], status: 200
    else
      render json: ["Unable to Save to Library"], status: 404
    end
  end

  def destroy
    @artists_user = ArtistsUser.find_by(id: params[:id])
    @user = User.find_by(id: @artists_user.user_id)

    @artists_user.destroy
    render json: ["Removed from Library"], status: 200
  end

  private
  def artists_user_params 
    params.require(:artists_user).permit(:artist_id, :user_id)
  end
end
