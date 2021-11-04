json.array! @articles do |articles|
    json.extract! article, :id, :title
    json.photoUrl url_for(article.photo)
end 