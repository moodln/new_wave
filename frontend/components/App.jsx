import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/GreetingContainer';
import AlbumShowContainer from './albums/album_show_container';
import CreateAlbumContainer from './albums/create_album_form_container';
import HeaderContainer from './header/header_container';
import ArtistShowContainer from './artist/artist_show_container';


const App = () => (
    <div>
        <HeaderContainer />
        <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
            <Route exact path="/albums" component={CreateAlbumContainer} />
            <Route exact path='/users/:userId' component={ArtistShowContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;