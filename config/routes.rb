Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resources :albums, only: [:show, :create, :index]
    resources :articles, only: [:show, :index]
    resources :songs, only: [:show]
    resource :session, only: [:create, :destroy]
  end 

end
