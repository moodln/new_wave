class Api::AlbumsController < ApplicationController 

    def show 
        @album = Album.find(params[:id])
        render :show 
    end 

    def index
        @albums = Album.all 
        render :index
    end 


    def album_params 
        params.require(:album).permit(:title, :artist_id, :photo)
    end 
end 