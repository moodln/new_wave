class Api::AlbumsController < ApplicationController 

    def index
        @albums = Album.joins(:artist)
        # debugger 
        render :index
    end 

    def show
        # debugger
        @album = Album.includes(:artist).find_by(id: params[:id])
        # @album.song.attach(@album.song)
        # debugger
        # @song = Song.find_by(album_id: params[:id])
        # @artist = User.find_by(id: params[:artist_id])
        
        render :show 
    end 

    def create 
        form = params["album"]
        errors = []
        
        errors << 'album must have a title' if form["title"] == "album name"     
        errors << 'you must upload a song' if form["songs"][0] == "null" 
        errors << 'you must have an album photo' if form["photo"] == "null"
        
        if errors.length > 0
            render json: errors.join(', '), status: 422
        else 
            
            @album = Album.create(album_params)
            # debugger
            # # @song = Song.create(@album.songs[0])
            # # @song.album_id = @album.id
            # debugger
            
            
            # @song = Song.create(@album.song) Song.create!(title: "Mother's Love", album_id: tsegueAlbum.id)
            # @song.album_id = @album.id

            # song needs title (track_name), album_id, then audio.attach
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
        params.require(:album).permit(:title, :artist_id, :photo, :release_date, :price, :description, :track_title)
    end 
end 