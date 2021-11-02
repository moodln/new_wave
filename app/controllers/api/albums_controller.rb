class Api::AlbumsController < ApplicationController 

    def show 
        @album = Album.find(params[:id])
        render :show 
    end 

    def index
        @albums = Album.all 
        render :index
    end 

    def create 
        @album = Album.new(album_params)

        if @album.save 
            render json: {message: 'you did ittt'}
        else 
            render json: @album.errors.full_messages 
        end 
    end 


    def album_params 
        params.require(:album).permit(:title, :artist_id)
    end 
end 