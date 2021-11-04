# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    # require 'open-uri'  

    User.destroy_all 
    Album.destroy_all
    Article.destroy_all

    demoUser = User.create!(username: 'guest', email: 'demo@demo.com', password: 'password')
    demoAlbum = Album.create!(title: 'Beat', artist_id: demoUser.id)
    # file = open('https://new-wave-aa-dev.us-east-1.amazonaws.com/<optional_folder_name>/<some_file>.jpg')
    demoAlbum.photo.attach(
        io: File.open('./app/assets/images/beat.jpeg'), 
        filename: 'beat.jpeg')
        
    demoArticle = Article.create!(title: 'new wave weekly', description: 'Tim Gane and Laetitia Sadier pick their favourite tracks and reflect on two decades of pioneering electropop')
    demoArticle.photo.attach(
        io: File.open('./app/assets/images/stereolab2.png'),
        filename: 'stereolab.jpeg')
        # content_type: 'image/jpeg')
    puts "created #{demoUser.username}"
    puts "created #{demoAlbum.title}"
    puts "created #{demoArticle.title} with #{demoArticle.photo.filename}"