json.array! @articles do |article|
    json.extract! article, :id, :title, :description
    json.photoUrl url_for(article.photo)
end 