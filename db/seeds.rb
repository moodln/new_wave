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
    Song.destroy_all
    ApplicationRecord.connection.reset_pk_sequence!('albums')
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('articles')
    ApplicationRecord.connection.reset_pk_sequence!('songs')

    demoUser = User.create!(username: 'guest', email: 'demo@demo.com', password: 'password')
    boweryArtist = User.create!(username: 'bowery_electric', name: 'Bowery Electric', email: 'bowery@gmail.com', password: 'password', location: 'NYC', about: 'American post-rock band, formed in 1993', artist: true)
    esgArtist = User.create!(username: 'ESG', email: 'esg@esg.com', password: 'password', location: 'The Bronx, NYC', about: 'ESG is an American funk rock band formed in the South Bronx in 1978. ESG has been influential across a wide range of musical genres, including hip hop, and dance-punk.', artist: true)
    tsegueArtist = User.create!(username: 'tsegue_maryam_guebrou', name: 'Tsegue Maryam Guebrou',email: 'tsegue@gmail.com', password: 'password', location: 'addis ababa, ethiopia', about: 'Emahoy Tsegué-Maryam Guèbrou is an Ethiopian nun known for her piano playing and compositions.', artist: true)
    cocteauArtist = User.create!(username: 'cocteau_twins', name: 'Cocteau Twins', email: 'cocteau@gmail.com', password: 'password', location: 'grangemouth, scotland', about: 'Cocteau Twins were a Scottish dream pop band active from 1979 to 1997.', artist: true)
    latinAtrist = User.create!(username: 'latin_playboys', name: 'Latin Playboys', email: 'latin@gmail.com', password: 'password', location: 'East Los Angeles, California', artist: true)
    stereoAtrist = User.create!(username: 'stereolab', name: 'Stereolab', email: 'stereolab@gmail.com', password: 'password', location: 'London, England', artist: true, about: 'Stereolab are an English-French avant-pop band formed in London in 1990. Led by the songwriting team of Tim Gane and Lætitia Sadier, the group\'s music combines influences from krautrock, lounge and 1960s pop music, often incorporating a repetitive motorik beat with heavy use of vintage electronic keyboards and female vocals sung in English and French.')
    broadcastArtist = User.create!(username: 'broadcast', name: 'Broadcast', email: 'broadcast@gmail.com', password: 'password', location: 'Birmingham, England', artist: true, about: 'Broadcast were an English electronic band formed in Birmingham in 1995 by Trish Keenan (vocals, keyboards, guitar) and James Cargill (bass). Their musical style blended elements of 1960s American psychedelia with experimental electronica, incorporating samples from various sources, and earned the band a cult following.')
    # ('about' from Wikipedia)
    broadcastAlbum1 = Album.create(title: 'Haha Sound', artist_id: broadcastArtist.id)
    broadcastAlbum1.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/hahasoung.jpeg'), 
        filename: 'hahasound.jpeg')
    broadcastAlbum2 = Album.create(title: 'The Future Crayon', artist_id: broadcastArtist.id)
    broadcastAlbum2.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/future.jpeg'), 
        filename: 'peng.jpeg')
    stereoAlbum = Album.create!(title: 'Peng!', artist_id: stereoAtrist.id)
    stereoAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/peng.jpeg'), 
        filename: 'peng.jpeg')
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
    tsegueAlbum = Album.create!(title: 'Ethiopiques, vol. 21', artist_id: tsegueArtist.id)
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

    mothersLove = Song.create!(title: "Mother's Love", album_id: tsegueAlbum.id)
    mothersLove.audio.attach(
        io: open("https://new-wave-aa-seeds.s3.amazonaws.com/Mother's+Love.mp3"),
        filename: "Mother's+Love.mp3"
    )
    cherrySong = Song.create!(title: 'Cherry-Coloured Funk', album_id: cocteauAlbum.id)
    cherrySong.audio.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Cherry-coloured+Funk.mp3'),
        filename: 'Cherry-coloured+Funk.mp3'
    )
    manifoldSong = Song.create!(title: 'Manifold De Amour', album_id: latinAlbum.id)
    manifoldSong.audio.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Manifold+de+Amour+-+Latin+Playboys.mp3'),
        filename: 'Manifold+de+Amour+-+Latin+Playboys.mp3'
    )
    cawesgSong = Song.create!(title: 'Dance', album_id: cawesgAlbum.id)
    cawesgSong.audio.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/ESG+-+Dance.mp3'),
        filename: 'Dance.mp3'
    )
    moodySong = Song.create!(title: 'UFO', album_id: esgMoodyEp.id)
    moodySong.audio.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/ESG+-+UFO.mp3'),
        filename: 'UFO.mp3'
    )
    beatSong = Song.create!(title: 'Empty Words', album_id: beatAlbum.id)
    beatSong.audio.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Empty+Words.mp3'),
        filename: 'Empty.mp3'
    )
    kstarsSong = Song.create!(title: 'K-Stars', album_id: stereoAlbum.id)
    kstarsSong.audio.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Stereolab+-++K-Stars.mp3'),
        filename: 'K-Stars.mp3'
    )

    manSong = Song.create!(title: 'Man Is Not A Bird', album_id: broadcastAlbum1.id)
    manSong.audio.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Broadcast+-+Man+Is+Not+A+Bird.mp3'),
        filename: 'Man.mp3'
    )
    
    illuminationSong = Song.create!(title: 'Illumination', album_id: broadcastAlbum2.id)
    illuminationSong.audio.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Broadcast+-+Illumination.mp3'),
        filename: 'Illumination.mp3'
    )
    

        
    stereoArticle = Article.create!(title: 'New Wave Weekly', description: 'Tim Gane and Laetitia Sadier pick their favourite tracks', artist_id: stereoAtrist.id)     
    stereoArticle.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/stereolab2.jpeg'),
        filename: 'stereolab2.jpeg')
    stereoAtrist.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/stereolab.jpeg'),
        filename: 'stereolab.jpeg')

    broadcastArticle = Article.create!(title: 'Broadcast', description: 'The Noise Made By People', artist_id: broadcastArtist.id)
    broadcastArticle.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Broadcast_in_2010.jpeg'), 
        filename: 'Broadcast_in_2010.jpeg')
    broadcastArtist.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Broadcast_in_2010.jpeg'), 
        filename: 'Broadcast_in_20102.jpeg')

    esgArticle = Article.create!(title: 'ESG', description: 'Come Away With ESG', artist_id: esgArtist.id)
    esgArticle.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/ESG.jpeg'),
        filename: 'ESG.jpeg')
    esgArtist.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/ESG.jpeg'),
        filename: 'ESG2.jpeg')
    




    puts "created #{demoUser.username}"
    puts "created '#{esgArticle.title}' with '#{esgArticle.artist_id}' attachment"
    puts "created #{beatAlbum.title}"
    puts "created #{stereoArticle.title} with #{stereoArticle.photo.filename}"