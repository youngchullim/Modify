Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:destroy, :create]
    resources :songs, only: [:index, :show]
    end

  root to: 'static_pages#root'
end