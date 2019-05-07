class Api::ArtistsController < ApplicationController
  before_action :require_login

  def show
    @artist = Artist.find_by(id: params[:id])
    @user = current_user
    @artists_users = @user.artists_users.map { |artist| Artist.find_by(id: artist.artist_id) }
  end

  def index
    @artists = Artist.all
  end

  private
  def artist_parans
    params.require(:artist).permit(:name, :biography, :genre)
  end
end
