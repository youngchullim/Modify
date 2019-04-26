Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create] do
      resources :songs_users, only: [:index]
      resources :albums_users, only: [:index]
      resources :artists_users, only: [:index]
      resources :playlists_users, only: [:index]
      resources :playlists_songs, only: [:index]
    end
    resource :session, only: [:destroy, :create]
    resources :songs, only: [:index, :show]
    resources :playlists, only: [:index, :create, :show, :update, :destroy]
    resources :albums, only: [:show, :index]
    resources :artists, only: [:show, :index]
    resources :songs_users, only: [:create, :destroy]
    resources :albums_users, only: [:create, :destroy]
    resources :artists_users, only: [:create, :destroy]
    resources :playlists_users, only: [:create, :destroy]
    resources :playlists_songs, only: [:index, :create, :destroy]
    end

end