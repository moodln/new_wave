@albums.each do |album|
    json.set! album.id do 
        json.extract! album, :id, :title, :artist 
        
        json.photoUrl url_for(album.photo) 
    end
end

