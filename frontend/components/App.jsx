import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/GreetingContainer';
import AlbumShowContainer from './albums/album_show_container';
import CreateAlbumContainer from './albums/create_album_form_container';
import HeaderContainer from './header/header_container';
import ArtistShowContainer from './artist/artist_show_container';
import ArtistAlbumsContainer from './artist/artist_albums_container';
import Footer from './footer/Footer';


const App = () => (
    <div>
        <HeaderContainer />
        <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
            <Route exact path="/albums" component={CreateAlbumContainer} />
            <Route exact path='/artist/albums/:artistId' component={ArtistAlbumsContainer} />
            <Route exact path='/users/:userId' component={ArtistShowContainer} />
            <Redirect exact from="/users/artist/albums/:artistId" to="/artist/albums/:artistId" />
            <Redirect to="/" />
        </Switch>
        <Footer />
    </div>
);

export default App;