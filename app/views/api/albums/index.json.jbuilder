json.array! @albums do |album|
    json.partial! 'api/albums/album', album: album 
    json.artist do 
        json.partial! 'api/users/user', user: album.artist
    end
end 

