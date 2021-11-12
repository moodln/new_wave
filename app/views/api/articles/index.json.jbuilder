json.array! @articles do |article|
    json.extract! article, :id, :title, :description
    json.artist do
        json.partial! '/api/users/user', user: article.artist
    end
    json.photoUrl url_for(article.photo)
end 