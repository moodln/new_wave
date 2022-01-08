class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.includes(:albums).find_by(id: params[:id])
        debugger
        # @albums = Album.find_by(artist_id: params[:id])
        render :show
    end

    def update 
        @user = User.find_by(id: params[:id])

        if @user.update(user_params)
            render :show 
        else  
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    private

    def user_params
        params.require(:user).permit(:username, :password, :email, :albums, :photo, :about, :location, :artist, :artist_id)
    end
end
