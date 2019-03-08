class Api::AlbumsController < ApplicationController
  before_action :require_login

  def show
    @album = Album.find_by(id: params[:id])
  end

  def index
    @albums = Album.all
  end

  private
  def album_parans
    params.require(:album).permit(:title, :year)
  end

end
