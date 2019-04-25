class Api::AlbumsController < ApplicationController
  before_action :require_login

  def show
    @album = Album.find_by(id: params[:id])
    @user = current_user
    @albums_users = @user.albums_users.map { |album| Album.find_by(id: album.album_id) }
  end

  def index
    @albums = Album.all
  end

  private
  def album_parans
    params.require(:album).permit(:title, :year)
  end

end
