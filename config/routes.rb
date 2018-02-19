Rails.application.routes.draw do
  namespace :api do
    resources :items, except: [:new, :edit]
  end
end

get '*other', to: 'static#index'
