class Api::SongsController < ApplicationController
  before_action :require_login

  def show
    @song = Song.find_by(id: params[:id])
  end

  def index
    @songs = Song.all
  end

  private
  def song_parans
    params.require(:song).permit(:title, :year, :genre)
  end
end
