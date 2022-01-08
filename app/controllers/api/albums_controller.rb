class Api::AlbumsController < ApplicationController 

    def index
        @albums = Album.all
        # debugger 
        render :index
    end 

    def show 
        @album = Album.find(params[:id])
        # debugger
        @song = Song.find_by(album_id: params[:id])
        @artist = User.find_by(id: params[:artist_id])
        
        render :show 
    end 

    def create 
        form = params["album"]
        errors = []

        errors << 'album must have a title' if form["title"] == "album name"     
        errors << 'you must upload a song' if form["song"] == "null" 
        errors << 'you must have an album photo' if form["photo"] == "null"

        # debugger
        if errors.length > 0
            # debugger
            render json: errors.join(', '), status: 422
        else 
            # debugger
            @album = Album.create(album_params)
            # @song = Song.create!(@album.song)
            # debugger
            if @album.save
                render :show
            else
                render json: @album.errors.full_messages, status: 422
            end
        end
        
    end 

    def destroy
        @album = Album.find(params[:id])
        if @album.artist_id == current_user.id 
            @album.destroy 
            @albums = Album.all
            render :index
        end  
        #     render json: 'cannot remove album that is not yours'
        # end
    end 

    def album_params 
        params.require(:album).permit(:title, :artist_id, :photo, :song)
    end 
end 