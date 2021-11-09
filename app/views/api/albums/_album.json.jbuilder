albums do |album|
    json.extract! album, :id, :title 
    json.photoUrl url_for(album.photo)
end