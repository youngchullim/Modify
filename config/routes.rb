Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    # delete '/session' => 'session#destroy'
      # URI Pattern: /api/session
      # resource :session, only: [:create]

      resource :session, only: [:destroy, :create]
      # URI Pattern: /api/session/:id
    end

  root to: 'static_pages#root'
end