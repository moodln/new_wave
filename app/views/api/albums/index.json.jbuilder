@albums.each do |album|
    json.set! album.id do 
        json.extract! album, :id, :title
        json.artist do
            json.partial! '/api/users/user', user: album.artist
        end
        json.photoUrl url_for(album.photo) 
        json.songUrl url_for(album.song)
    end
end

