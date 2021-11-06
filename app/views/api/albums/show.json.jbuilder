json.extract! @album, :id, :title

json.photoUrl url_for(@album.photo)
json.songUrls @album.songs.map { | file | url_for(file) }