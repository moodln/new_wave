class Api::AlbumsController < ApplicationController 

    def index
        @albums = Album.all 
        render :index
    end 

    def show 
        @album = Album.find(params[:id])
        @song = Song.find_by(album_id: params[:id])
        # @artist = User.find_by(id: params[:artist_id])
        render :show 
    end 

    def create 
        @album = Album.create!(album_params)
        # @song = Song.create!(@album.song)
        # debugger
        if @album.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end 

    def album_params 
        params.require(:album).permit(:title, :artist_id, :photo, :song)
    end 
end 