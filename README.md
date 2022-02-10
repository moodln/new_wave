# <img width="200" height="50" alt="logo" src="https://user-images.githubusercontent.com/88460822/141481801-161866c9-012f-4b03-854a-039b5323e038.png">


New Wave is a single page clone of BandCamp - a website that hosts artists' music and allows fans to follow and purchase songs or albums from artists. New wave was built using React, Redux, and Ruby on Rails; and it incorporates Amazon Web Services S3 to store, upload, and stream audio and image files. 

[live site](https://newwwave.herokuapp.com/#/)

 
# Upload Songs


<p align="center">
<img src="https://user-images.githubusercontent.com/88460822/153445782-a34c5212-8216-4299-9b64-cd5cd8133b60.gif" width="800" height="auto" />
</p>





After a user is logged in, they will have the option to create their own album. They will be able to upload audio and image files, and include a title. This feature was implemented using the FormData object and AWS. 

<p align="center">
<img width="572" alt="Screen Shot 2021-11-12 at 9 41 24 AM" src="https://user-images.githubusercontent.com/88460822/141484680-4f289525-6723-42ad-885d-0130f75aece4.png">
</p>
 
The image and audio files are passed back to the frontend by grabbing them in the json.jbuilder file and using the Ruby `url_for` method to convert them into a url that the frontend can render.

<p align="center">
<img width="314" alt="Screen Shot 2021-11-12 at 9 42 39 AM" src="https://user-images.githubusercontent.com/88460822/141484858-7396d3a0-1166-42fe-a7b2-3dca4828f017.png">
</p>

# Search Functionality 

Users are able to search for different artists by using the searchbar, which appears on every page. 

<p align="center">
<img src="https://user-images.githubusercontent.com/88460822/153449360-4ca58bbd-0688-43c1-9051-dd6e91c4c672.mov" width="800" height="auto" />
</p>


# Future Directions 

* Genre Tags
