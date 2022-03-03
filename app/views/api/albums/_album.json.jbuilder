json.id album.id
json.title album.title 
json.release_date album.release_date
json.photoUrl url_for(album.photo) if album.photo.attached?
json.songUrl url_for(album.track.audio) if album.track && album.track.audio.attached?
json.songUrl url_for(album.song) if album.song.attached?
