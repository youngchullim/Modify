class Api::PlaylistsController < ApplicationController
  before_action :require_login

  def new
    @playlist = Playlist.new
  end

  def index
    @playlists = Playlist.all
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)

    render :show if @playlist.save
  end

  def show
    @playlist.find_by(id: params[:id])
  end

  def update
    @playlist = Playlist.find_by(id: params[:id])
    render :show if @playlist.update_attritbutes(playlist_params)
  end

  def destroy
    @playlist = Playlist.find_by(id: params[:id])
    @playlist.destroy
    render :index
  end

  private
  def playlist_params
    params.require(:playlist).permit(:name)
  end
  
end
