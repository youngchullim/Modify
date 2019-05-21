class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      @current_song = current_song(@user)
      render :show
    else
      render json: ["Invalid input. Please try again."], status: 401
    end
  end

  def show
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
