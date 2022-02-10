# <img width="200" height="50" alt="logo" src="https://user-images.githubusercontent.com/88460822/141481801-161866c9-012f-4b03-854a-039b5323e038.png">


New Wave is a single page clone of BandCamp - a website that hosts artists' music and allows fans to follow and purchase songs or albums from artists. New wave was built using React, Redux, and Ruby on Rails; and it incorporates Amazon Web Services S3 to store, upload, and stream audio and image files. 

[live site](https://newwwave.herokuapp.com/#/)

 
# Upload Songs




<div style="width:360px;max-width:100%;"><div style="height:0;padding-bottom:63.33%;position:relative;"><iframe width="360" height="228" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/64peo7"></iframe></div><p><a href="https://imgflip.com/gif/64peo7">via Imgflip</a></p></div>




After a user is logged in, they will have the option to create their own album. They will be able to upload audio and image files, and include a title. This feature was implemented using the FormData object and AWS. 

<img width="572" alt="Screen Shot 2021-11-12 at 9 41 24 AM" src="https://user-images.githubusercontent.com/88460822/141484680-4f289525-6723-42ad-885d-0130f75aece4.png">

The image and audio files are passed back to the frontend by grabbing them in the json.jbuilder file and using the Ruby `url_for` method to convert them into a url that the frontend can render.

<img width="314" alt="Screen Shot 2021-11-12 at 9 42 39 AM" src="https://user-images.githubusercontent.com/88460822/141484858-7396d3a0-1166-42fe-a7b2-3dca4828f017.png">

#Song Player 

![Screen Recording 2021-11-12 at 9 46 28 AM](https://user-images.githubusercontent.com/88460822/141489584-5aa0a10f-35bf-4a13-95e2-e27fd1100c06.gif)



Users can navigate to an artist's show page, where there is a song player attached. The song player includes a play and pause button, as well as volume control. There is another button displayed next to the track listings, which also allows the user to play the song associated with the track listing. This was incorporated by implementing a callback to an onClick function. 

<img width="487" alt="Screen Shot 2021-11-12 at 9 53 01 AM" src="https://user-images.githubusercontent.com/88460822/141486412-ab826984-9151-41fe-b0b9-eca1b73cc1b1.png">


<img width="361" alt="Screen Shot 2021-11-12 at 9 52 26 AM" src="https://user-images.githubusercontent.com/88460822/141486315-b3ee208c-474f-4cd6-90ba-6ae7d51e135f.png">

# Future Directions 

* Search Functionality
* Genre Tags
