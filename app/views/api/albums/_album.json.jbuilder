json.id album.id
json.title album.title 
json.release_date album.release_date
json.description album.description
json.price album.price
json.photoUrl url_for(album.photo) if album.photo.attached?

json.songs album.songs do |song|
    json.title song.title
    json.url url_for(song.audio)
end
