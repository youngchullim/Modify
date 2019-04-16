Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:destroy, :create]
    resources :songs, only: [:index, :show]
    resources :playlists, only: [:index, :create, :show, :update, :destroy]
    resources :albums, only: [:show, :index]
    resources :artists, only: [:show, :index]
    resources :songs_users, only: [:index, :create, :destroy]
    resources :albums_users, only: [:index, :create, :destroy]
    resources :artists_users, only: [:index, :create, :destroy]
    end

  root to: 'static_pages#root'
end