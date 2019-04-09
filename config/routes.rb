Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:destroy, :create]
    resources :songs, only: [:index, :show]
    resources :playlists, only: [:index, :create, :show, :update, :destroy]
    resources :albums, only: [:show, :index]
    resources :artists, only: [:show, :index]
    end

  root to: 'static_pages#root'
end