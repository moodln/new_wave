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
    boweryArtist = User.create!(username: 'bowery electric', name: 'Bowery Electric', email: 'bowery@gmail.com', password: 'password', location: 'NYC', about: 'American post-rock band, formed in 1993', artist: true)
    esgArtist = User.create!(username: 'ESG', email: 'esg@esg.com', password: 'password', location: 'The Bronx, NYC', about: 'ESG is an American funk rock band formed in the South Bronx in 1978. ESG has been influential across a wide range of musical genres, including hip hop, and dance-punk.', artist: true)
    tsegueArtist = User.create!(username: 'tsegue maryam guebrou', name: 'Tsegue Maryam Guebrou',email: 'tsegue@gmail.com', password: 'password', location: 'addis ababa, ethiopia', about: 'Emahoy Tsegué-Maryam Guèbrou is an Ethiopian nun known for her piano playing and compositions.', artist: true)
    cocteauArtist = User.create!(username: 'cocteau twins', name: 'Cocteau Twins', email: 'cocteau@gmail.com', password: 'password', location: 'grangemouth, scotland', about: 'Cocteau Twins were a Scottish dream pop band active from 1979 to 1997.', artist: true)
    latinAtrist = User.create!(username: 'latin playboys', name: 'Latin Playboys', email: 'latin@gmail.com', password: 'password', location: 'East Los Angeles, California', artist: true)
    stereoAtrist = User.create!(username: 'stereolab', name: 'Stereolab', email: 'stereolab@gmail.com', password: 'password', location: 'London, England', artist: true, about: 'Stereolab are an English-French avant-pop band formed in London in 1990. Led by the songwriting team of Tim Gane and Lætitia Sadier, the group\'s music combines influences from krautrock, lounge and 1960s pop music, often incorporating a repetitive motorik beat with heavy use of vintage electronic keyboards and female vocals sung in English and French.')
    broadcastArtist = User.create!(username: 'broadcast', name: 'Broadcast', email: 'broadcast@gmail.com', password: 'password', location: 'Birmingham, England', artist: true, about: 'Broadcast were an English electronic band formed in Birmingham in 1995 by Trish Keenan (vocals, keyboards, guitar) and James Cargill (bass). Their musical style blended elements of 1960s American psychedelia with experimental electronica, incorporating samples from various sources, and earned the band a cult following.')
    mosesArtist = User.create!(username: 'moses sumney', name: 'Moses Sumney', email: 'moses@gmail.com', password: 'password', location: 'San Bernardino, California', artist: true, about: 'Moses Sumney is a Ghanaian-American singer-songwriter. His self-recorded EP, Mid-City Island, was released in 2014. He released another five-song EP in 2016, titled Lamentations. His first full-length album, Aromanticism, was released in September 2017. His second studio album, Græ, was released in 2020.')
    # ('about' from Wikipedia)

    broadcastAlbum1desc = "Haha Sound is a sharp turn from Broadcast's debut full-length, The Noise Made by People, and their early singles (collected on 1997's Work and Non-Work). 
    \r\n
    As their album titles indicate, Broadcast are steeped in the exploration of the detail and nuance of 'noise' and 'sounds.' On The Noise Made by People, the band created seamless, languid, soothing dreamscapes; here they've opted for a more cluttered, percussive rattle. 
    \r\n
    As she has in the past, vocalist Trish Keenan still seems as if she's singing lullabies, though the rest of the group is more intent on inflicting nightmares. Keenan's opening confession and request, 'I am gray/ Still on the page/ Colour me in,' is heeded over the course of the record by her bandmates as her detached vocals and fragile melodies are accompanied by a carnival of vintage electronics and sometimes-cacophonous sheets of polyrhythms. 
    \r\n
    \r\n
    (Description from https://pitchfork.com/reviews/albums/947-haha-sound/)"

    broadcastAlbum1 = Album.create(title: 'Haha Sound', 
        artist_id: broadcastArtist.id, 
        release_date: '08/11/2003', 
        description: broadcastAlbum1desc)
    broadcastAlbum1.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/hahasoung.jpeg'), 
        filename: 'hahasound.jpeg')

    broadcastAlbum2desc = "The Future Crayon is a rarities and B-sides compilation by British indie electronic band Broadcast, released on 21 August 2006 by Warp. It collects all the tracks released on singles, EPs and compilations from 1999 to 2003, with the exception of 'Drums on Fire'.
    \r\n
    \r\n
    (Description from https://en.wikipedia.org/wiki/The_Future_Crayon)"
    broadcastAlbum2 = Album.create(title: 'The Future Crayon', 
        artist_id: broadcastArtist.id,
        release_date: '08/21/2006',
        description: broadcastAlbum2desc)
    broadcastAlbum2.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/future.jpeg'), 
        filename: 'future.jpeg')

    mosesDesc = "On græ, Moses Sumney lets out everything inside of him. The album is bigger, in every sense—longer, for starters, a 20-song double album that Sumney saw fit to release in two parts (the first half of the album appeared in February, the second arriving only this week.)
    \r\n
    Where Aromanticism was intimate and sleek, græ is rangy, sprawling, a riot of moods from lustful to angry to broken-hearted. He has summoned a battalion of collaborators, including production from Daniel Lopatin, basslines from Thundercat, saxophone from Shabaka Hutchings, horn parts from the English art-rock group Adult Jazz, writing credits from James Blake and author Michael Chabon. The camera lens zooms out from dewdrop to mountain range. Everything Sumney’s ever done or tried to do is here. 
    \r\n 
    \r\n 
    (Description from https://pitchfork.com/reviews/albums/moses-sumney-grae/)"
    mosesAlbum = Album.create(title: 'græ, Part 1', artist_id: mosesArtist.id, release_date: '02/21/2020', 
        description: mosesDesc)
    mosesAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/grae.jpeg'), 
        filename: 'grae.jpeg')

    stereoDesc = "Peng! is the debut studio album by English-French rock band Stereolab. It was released on 26 May 1992 by Too Pure in the United Kingdom. The album was issued in the United States on 13 June 1995 by Too Pure and American Recordings. A remastered edition of the album was released on 9 November 2018 by Too Pure and Beggars Arkive.
    \r\n
    The album's title (a German onomatopoeia for a loud pop or bang) and cover art are derived from a comic strip named Der tödliche Finger that appeared in a 1970 issue of Hotcha, a Swiss underground newspaper. Different panels of the same strip were adapted into cover art for other early Stereolab releases, and remain popular icons for the band. 
    \r\n 
    \r\n
    (Description from https://en.wikipedia.org/wiki/Peng!)"
    stereoAlbum = Album.create!(title: 'Peng!', artist_id: stereoAtrist.id, release_date: '05/26/1992', 
        description: stereoDesc)
    stereoAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/peng.jpeg'), 
        filename: 'peng.jpeg')

    beatDesc = "Beat is the second studio album by American band Bowery Electric. 
    \r\n
    It was released on November 12, 1996 by Kranky. Lawrence Chandler of Bowery Electric told Alternative Press 'Beat is the beginning of us learning our way around a proper sampler and software which allows us to work with samples on the computer. We can sample ourselves, manipulate sounds, create our own beats and basically work with fewer restrictions.'
    \r\n
    \r\n
    (Description from https://en.wikipedia.org/wiki/Beat_(Bowery_Electric_album))"
    beatAlbum = Album.create!(title: 'Beat', artist_id: boweryArtist.id, release_date: '11/12/1996', description: beatDesc)
    beatAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/beat.jpeg'), 
        filename: 'beat.jpeg')

    moodyDesc = "ESG is the debut EP by American post-punk band ESG. 
    \r\n
    It was released by 99 Records in 1981. The EP received positive reviews from music critics. 'Moody' became popular with house DJs, and 'UFO' came to be one of the most sampled tracks in hip hop music. 
    \r\n
    \r\n
    (Description from https://en.wikipedia.org/wiki/ESG_(EP))"
    esgMoodyEp = Album.create!(title: 'The Moody EP', artist_id: esgArtist.id, release_date: '01/01/1981', description: moodyDesc)
    esgMoodyEp.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Screen+Shot+2022-03-03+at+4.19.13+PM.png'),
        filename: 'esgmoody.jpg')

    cawesDesc = "Decades after its release, Come Away with ESG saw a critical resurgence. It was named the 84th greatest album of the 1980s by Pitchfork. 
    \r\n
    The album became influential for post-punk, dance, and hip hop acts. Kathleen Hanna stated that it influenced her work with Le Tigre. Royal Trux member Jennifer Herrema has also cited Come Away with ESG as an influence. 
    \r\n
    \r\n
    (Description from https://en.wikipedia.org/wiki/Come_Away_with_ESG)"
    cawesgAlbum = Album.create!(title: 'Come Away With ESG', artist_id: esgArtist.id, release_date: '03/01/1983', description: cawesDesc )
    cawesgAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/cawesgAlbum.jpeg'),
        filename: 'cawesgAlbum.jpeg')

    tsegueDesc = "The Éthiopiques series is known for high-energy pop, brass bands and jazzy instrumentals-dance music for swingin’ Addis Ababa. But the 21st volume acts like a nightcap after a night out on the town. 
    \r\n
    Playing solo piano, Tsegué-Maryam Guèbrou works through 16 delicate compositions that sound like a somber Claude Debussy interpreting Ethiopian music: pentatonic, modal and mostly in the middle register. 
    \r\n
    The performances come from the 1960s, 1970s and 1990s, all made after Guèbrou had become a nun because her dreams to become a full-time musician were dashed by governmental interference. She made these recordings to raise money for charities, and it’s a relief she didn’t give up on music entirely after politics derailed her dreams. Emahoy is a strange, sui generis CD. 
    \r\n
    \r\n
    (Description from https://jazztimes.com/archives/emahoy-tsegue-and-maryam-guebrou-ethiopiques-21-ethiopia-song/)"
    tsegueAlbum = Album.create!(title: 'Ethiopiques, vol. 21', artist_id: tsegueArtist.id, release_date: '12/01/2005', description: tsegueDesc)
    tsegueAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/tsegue.jpg'),
        filename: 'tsegue.jpg')

    cocteauDesc = "Released in 1990, Heaven or Las Vegas was Cocteau Twins' most commercially successful release, reaching number seven in the UK album charts.
    \r\n        
    Numerous publications have since declared it one of the best albums of the ‘90s, Pitchfork calling it “a core of ungodly gorgeous songs that is every bit as moving and relevant today as it ever was.”
    \r\n    
    Label founder Ivo Watts-Russell goes further, candidly revealing in the recent 4AD biography, Facing The Other Way, that this album wasn’t just his favourite Cocteaus album but also his favourite all-time 4AD album, and “by a long shot”, calling it “the perfect record.
    \r\n
    \r\n
    (Description from https://genius.com/albums/Cocteau-twins/Heaven-or-las-vegas)"
    cocteauAlbum = Album.create!(title: 'Heaven or Las Vegas', artist_id: cocteauArtist.id, release_date: '09/17/1990', description: cocteauDesc)
    cocteauAlbum.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/holv.jpg'),
        filename: 'holv.jpeg')

    latinDesc = "Latin Playboys is the self-titled debut album of experimental band Latin Playboys.
    \r\n
    Robert Christgau of The Village Voice named the album the best release of 1994 and described it as 'impressionistic fragments coalescing into a self-sustaining aural counterreality.'Writing for The A.V. Club, Joshua Klein called the album a 'casual masterpiece' consisting of 'found sounds, low-fidelity recording techniques, distorted drum loops, deep-dungeon blues, fragmented guitar parts, and some gorgeous songs.' 
    \r\n
    In his AllMusic review, Richie Unterberger stated that the album's 'lyrics and song structures are almost impressionistic in tone, creating an effect similar to listening to your car radio as stations drift in and out of reach while you drive along the Mexican border.'Christgau later named it among his 10 best albums from the 1990s. 
    \r\n
    \r\n
    (Description from https://en.wikipedia.org/wiki/Latin_Playboys_(album))"
    latinAlbum = Album.create!(title: 'Latin Playboys', artist_id: latinAtrist.id, release_date: '03/08/1994', description: latinDesc)
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

    cutMeSong = Song.create!(title: 'Cut Me', album_id: mosesAlbum.id)
    cutMeSong.audio.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Moses+Sumney+-+Cut+Me+++A+COLORS+SHOW.mp3'),
        filename: 'Moses Sumney - Cut Me A COLORS SHOW.mp3'
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

    mosesArticle = Article.create!(title: 'Moses Sumney', description: 'All Colors with Moses Sumney', artist_id: mosesArtist.id)     
    mosesArticle.photo.attach(
        io: open('https://new-wave-aa-seeds.s3.amazonaws.com/Moses%2BGatefold.jpeg'),
        filename: 'Moses+Gatefold.jpeg')


    




    puts "created #{demoUser.username}"
    puts "created '#{esgArticle.title}' with '#{esgArticle.artist_id}' attachment"
    puts "created #{beatAlbum.title}"
    puts "created #{stereoArticle.title} with #{stereoArticle.photo.filename}"