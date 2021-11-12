# <img width="200" height="50" alt="logo" src="https://user-images.githubusercontent.com/88460822/141481801-161866c9-012f-4b03-854a-039b5323e038.png">


New Wave is a single page clone of BandCamp - a website that hosts artists' music and allows fans to follow and purchase songs or albums from artists. New wave was built using React, Redux, and Ruby on Rails; and it incorporates Amazon Web Services S3 to store, upload, and stream audio and image files. 

[live site](https://newwwave.herokuapp.com/#/)

 
# Upload Songs



https://user-images.githubusercontent.com/88460822/141483816-42f76bb3-e231-4d28-a08a-f0a700994cec.mov

After a user is logged in, they will have the option to create their own album. They will be able to upload audio and image files, and include a title. This feature was implemented using the FormData object and AWS. 

<img width="572" alt="Screen Shot 2021-11-12 at 9 41 24 AM" src="https://user-images.githubusercontent.com/88460822/141484680-4f289525-6723-42ad-885d-0130f75aece4.png">

The image and audio files are passed back to the frontend by grabbing them in the json.jbuilder file and using the Ruby `url_for` method to convert them into a url that the frontend can render.

<img width="314" alt="Screen Shot 2021-11-12 at 9 42 39 AM" src="https://user-images.githubusercontent.com/88460822/141484858-7396d3a0-1166-42fe-a7b2-3dca4828f017.png">
