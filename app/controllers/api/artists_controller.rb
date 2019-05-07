class Api::ArtistsController < ApplicationController
  before_action :require_login

  def show
    @artist = Artist.find_by(id: params[:id])
  end

  def index
    @artists = Artist.all
  end

  private
  def artist_parans
    params.require(:artist).permit(:name, :bio, :genre)
  end
end
