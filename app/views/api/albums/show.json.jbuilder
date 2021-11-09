json.extract! @album, :id, :title, :artist
json.songTitle @song.title

json.photoUrl url_for(@album.photo)
json.songUrls url_for(@song.audio)
