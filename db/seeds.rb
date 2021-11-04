# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    require 'open-uri'  

    User.destroy_all 
    Album.destroy_all
    Article.destroy_all


    demoUser = User.create!(username: 'guest', email: 'demo@demo.com', password: 'password')
    boweryArtist = User.create!(username: 'bowery_electric', email: 'bowery@gmail.com', password: 'password', location: 'NYC', about: 'American post-rock band, formed in 1993')
    esgArtist = User.create!(username: 'ESG', email: 'esg@esg.com', password: 'password', location: 'The Bronx, NYC', about: 'ESG is an American funk rock band formed in the South Bronx in 1978. ESG has been influential across a wide range of musical genres, including hip hop, and dance-punk.')
    tsegueArtist = User.create!(username: 'tsegue_maryam_guebrou', email: 'tsegue@gmail.com', password: 'password', location: 'addis ababa, ethiopia', about: 'Emahoy Tsegué-Maryam Guèbrou is an Ethiopian nun known for her piano playing and compositions.' )
    cocteauArtist = User.create!(username: 'cocteau_twins', email: 'cocteau@gmail.com', password: 'password', location: 'grangemouth, scotland', about: 'Cocteau Twins were a Scottish dream pop band active from 1979 to 1997.')
    latinAtrist = User.create!(username: 'latin_playboys', email: 'latin@gmail.com', password: 'password', location: 'East Los Angeles, California')
    # ('about' from Wikipedia)

    beatAlbum = Album.create!(title: 'Beat', artist_id: boweryArtist.id)
    beatAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/beat.jpeg'), 
        filename: 'beat.jpeg')
    esgMoodyEp = Album.create!(title: 'The Moody EP', artist_id: esgArtist.id)
    esgMoodyEp.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/esgmoody.jpg'),
        filename: 'esgmoody.jpg')
    cawesgAlbum = Album.create!(title: 'Come Away With ESG', artist_id: esgArtist.id)
    cawesgAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/cawesgAlbum.jpeg'),
        filename: 'cawesgAlbum.jpeg')
    tsegueAlbum = Album.create!(title: 'Ethiopiques, vol. 21: Emahoy(Piano Solo)', artist_id: tsegueArtist.id)
    tsegueAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/tsegue.jpg'),
        filename: 'tsegue.jpg')
    cocteauAlbum = Album.create!(title: 'Heaven or Las Vegas', artist_id: cocteauArtist.id)
    cocteauAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/holv.jpg'),
        filename: 'holv.jpeg')
    latinAlbum = Album.create!(title: 'Latin Playboys', artist_id: latinAtrist.id)
    latinAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/ltnply.png'),
        filename: 'ltnply.png')


        
    stereoArticle = Article.create!(title: 'New Wave Weekly', description: 'Tim Gane and Laetitia Sadier pick their favourite tracks')
        # and reflect on two decades of pioneering electropop
    stereoArticle.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/stereolab2.jpeg'),
        filename: 'stereolab.jpeg')

    broadcastArticle = Article.create!(title: 'Broadcast', description: 'The Noise Made By People')
    broadcastArticle.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Broadcast_in_2010.jpeg'), 
        filename: 'Broadcast_in_2010.jpeg')

    esgArticle = Article.create!(title: 'ESG', description: 'Come Away With ESG')
    esgArticle.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/ESG.jpeg'),
        filename: 'ESG.jpeg')
    




    puts "created #{demoUser.username}"
    puts "created #{beatAlbum.title}"
    puts "created #{stereoArticle.title} with #{stereoArticle.photo.filename}"