# <img width="200" height="50" alt="logo" src="https://user-images.githubusercontent.com/88460822/141481801-161866c9-012f-4b03-854a-039b5323e038.png">


New Wave is a single page clone of BandCamp - a website that hosts artists' music and allows fans to follow and purchase songs or albums from artists. New wave was built using React, Redux, and Ruby on Rails; and it incorporates Amazon Web Services S3 to store, upload, and stream audio and image files. 

[live site](https://newwwave.herokuapp.com/#/)

 
# Upload Songs


<p align="center">
<img src="https://user-images.githubusercontent.com/88460822/153445782-a34c5212-8216-4299-9b64-cd5cd8133b60.gif" width="800" height="auto" />
</p>





After a user is logged in, they will have the option to create their own album. They will be able to upload audio and image files, and include a title. This feature was implemented using the FormData object and AWS. 
```javascript
    handleSubmit(e) {
        e.preventDefault();
            
            const formData = new FormData();

            formData.append('album[title]', this.state.title);
            formData.append('album[artist_id]', this.state.artist_id);
            formData.append('album[photo]', this.state.img_url);
            formData.append('album[song]', this.state.audio_url);
            
            this.props.createAlbum(formData)
                .then(response => {
                    return this.props.history.push(`/albums/${response.album.id}`)
                })
        
    }
```
The image and audio files are passed back to the frontend by grabbing them in the json.jbuilder file and using the Ruby `url_for` method to convert them into a url that the frontend can render.

<p align="center">
<img width="314" alt="Screen Shot 2021-11-12 at 9 42 39 AM" src="https://user-images.githubusercontent.com/88460822/141484858-7396d3a0-1166-42fe-a7b2-3dca4828f017.png">
</p>

# Search Functionality 

Users are able to search for different artists by using the searchbar, which appears on every page. 

<p align="center">
<img src="https://user-images.githubusercontent.com/88460822/153449568-67f84d0c-b586-419f-9e79-740ae3d5b955.gif" width="800" height="auto" />
</p>

On click, the user will see a list of artists available in a dropdown menu. Users have the option to select an artist from this dropdown menu, or to manually type an artist's name in the searchbar. User input will be received and will activate the filter functionality, which in turn will provide the user with the filtered response to choose from. When a user clicks on an artist's name in the dropdown menu, they will be brought to that artist's page. 

This functionality was achieved by first gathering all available data and feeding it into the dropdown menu as an Array. I could then filter through this data based on user input, which was acquired by way of attaching event listeners to the input element. From there, once the user submits their request, another event listener handles the user's input and redirects the user to the appropriate page. 

```javascript
  <ul className="search-dropdown">
                                
     {
       Array.from(artists.entries()).filter( entry => {
           let artist = entry[1];
           let idx = (entry[0].length - this.state.query.length) * -1
           if (this.state.query === '') {
               return artist;
           } else if (entry[0].slice(0, idx).toLowerCase().includes(this.state.query.toLowerCase())) {
               return artist;
           } else if (this.state.query.toLowerCase() === entry[0].toLowerCase()) {
               selectedArtist = artist;
               return artist;
           }
       }).map((artistObject, idx) => {
           return (
               <li className="artist-search-dropdown-item"
                   key={idx}
                   onClick={(e) => this.albumNavigation(e, artistObject[1].id)}>
                       {artistObject[0]}
               </li>
           )
       })
     }
  </ul>
```

```javascript 
albumNavigation(e, artistId) {
        this.handleInputClick();
        e.preventDefault();
        let albums = Object.values(this.props.albums).filter(album => album.artist.id === artistId)
        let album = albums[0];
        this.setState({
            query: ''
        })
        
        
        this.props.history.push(`/albums/redirect/${album.id}`)
}
```



# Future Directions 

* Genre Tags
