Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :show, :update]
    resources :albums, only: [:show, :create, :index, :destroy]
    resources :articles, only: [:show, :index]
    resources :songs, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
  end 

end
