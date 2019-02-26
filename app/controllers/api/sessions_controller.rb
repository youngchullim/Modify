class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.save
      render `/api/users/show`
    else
      render json: ["Incorrect email or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render `/api/users/show`
    else
      render json: ["No user logged in"], status: 404
      # @user.errors.full_messages
  end
  
end
