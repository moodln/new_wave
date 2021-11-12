json.extract! user, :id, :username, :email, :name, :location, :about, :img_url

json.set! 'albums' do
    user.albums.each do |album|
        json.set! album.id do
            json.id album.id
            json.title album.title
            json.albumUrl  url_for(album.photo)
        end
    end
end


if user.photo.attached? 
    json.photoUrl url_for(user.photo)
end



