Rails.application.routes.draw do

  mount Judge::Engine => '/judge'

  devise_for :users
  root 'static_pages#index'

  get 'static_pages/about'

  get 'static_pages/faq'

  get 'static_pages/contact'

end
