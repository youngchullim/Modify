Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :user, only: [:show, :create]
    # delete '/session' => 'session#destroy'
      # URI Pattern: /api/session
      resources :session, only: [:create]
      
      # resources :session, only: [:destroy, :create]
      # URI Pattern: /api/session/:id
    end

  root to: 'static_pages#root'
end