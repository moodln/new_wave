import React from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/GreetingContainer';

import AlbumShowContainer from './albums/album_show_container';
import CreateAlbumContainer from './albums/create_album_form_container';


const App = () => (
    <div>
        <Switch>
        <Route exact path='/' component={GreetingContainer} />
        <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
        <Route exact path='/albums' component={CreateAlbumContainer} />
        <Redirect to="/" />
        </Switch>
    </div>
);

export default App;