json.array! @albums do |album|
    json.partial! 'api/albums/album', album: album 
    json.artist album.artist
end 

