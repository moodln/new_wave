json.id album.id
json.title album.title 
json.photoUrl url_for(album.photo) if album.photo.attached?
json.songUrl url_for(album.song) if album.song.attached?

