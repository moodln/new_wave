json.id album.id
json.title album.title 
json.artist album.artist
json.photoUrl url_for(album.photo) if album.photo.attached?
json.songUrl url_for(album.song) if album.song.attached?