json.extract! user, :id, :username, :email, :name, :location, :about, :img_url, :albums

if user.photo.attached? 
    json.photoUrl url_for(user.photo)
end



