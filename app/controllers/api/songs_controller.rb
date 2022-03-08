class Api::SongsController < ApplicationController 
    def show 
        @song = Song.find(params[:id])
        render :show
    end 

    def create 
        @song = Song.create(song_params)
        debugger
        if @song.save
            @album = Album.includes(:artist).find_by(id: @song.album_id)
            debugger
            render '/api/albums/show'
        else 
            render json: @song.errors.full_messages, status: 422
        end 
    end 

    def song_params 
        params.require(:song).permit(:album_id, :audio, :title)
    end 
end 