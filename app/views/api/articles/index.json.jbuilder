json.array! @articles do |article|
    json.extract! article, :id, :title
    json.photoUrl url_for(article.photo)
end 