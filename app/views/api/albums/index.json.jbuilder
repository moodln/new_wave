json.array! @albums do |album|
    json.extract! album, :id, :title, :artist
    json.photoUrl url_for(album.photo)
end 