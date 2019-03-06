class Api::PlaylistsController < ApplicationController
  before_action :require_login

  def new
    @playlist = Playlist.new
  end

  def index
    @playlists = Playlist.joins(:playlists_users).where(playlists_users: {user_id: current_user.id})
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      @playlist.playlists_users.create(user_id: current_user.id)
      render :show 
    end
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
