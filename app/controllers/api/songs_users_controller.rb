class Api::SongsUsersController < ApplicationController
  def index 
    @user = User.find_by(id: params[:user_id])
    @songs_users = @user.songs_users.map { |song| Song.find_by(id: song.song_id) }
    render :index
  end

  def create
    @songs_user = SongsUser.new(songs_user_params)
    if @songs_user.save
      @user = User.find_by(id: @songs_user.user_id)
      render json: ["Saved to Library"], status: 200
    else
      render json: ["Unable to Save to Library"], status: 404
    end
  end

  def destroy
    @songs_user = SongsUser.find_by(id: params[:id])
    @user = User.find_by(id: @songs_user.user_id)

    @songs_user.destroy
    render json: ["Removed from Library"], status: 200
  end

  private
  def songs_user_params
    params.require(:songs_user).permit(:user_id, :song_id)
  end
end
