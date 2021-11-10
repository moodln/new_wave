json.extract! @album, :id, :title
json.artist do
    json.partial! '/api/users/user', user: @album.artist
end


if @album.photo.attached? 
    json.photoUrl url_for(@album.photo)
end

json.songUrls url_for(@song.audio)

