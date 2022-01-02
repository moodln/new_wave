json.extract! @album, :id, :title
json.artist do
    @artist.albums
end


if @album.photo.attached? 
    json.photoUrl url_for(@album.photo)
elsif @album.song.attached?  
    json.songUrls url_for(@song.audio)
end 

if @song 
    json.songUrls url_for(@song.audio)
elsif @album.song 
    json.songUrls url_for(@album.song)
end 

