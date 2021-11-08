json.extract! @album, :id, :title, :artist

json.photoUrl url_for(@album.photo)
json.songUrls @album.songs.map { | file | url_for(file) }