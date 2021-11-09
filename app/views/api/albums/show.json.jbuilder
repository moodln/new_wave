json.extract! @album, :id, :title
json.artist do
    json.partial! '/api/users/user', user: @album.artist
end
json.songTitle @song.title

json.photoUrl url_for(@album.photo)
json.songUrls url_for(@song.audio)
