import React from 'react';
import { Link, Route } from 'react-router-dom';
import GreetingContainer from './greeting/GreetingContainer';

import AlbumShowContainer from './albums/album_show_container';


const App = () => (
    <div>
        
        <Link to='/'>
            <img src={window.logo} alt="new_wave logo" className='logo' />
        </Link>
       
        <Route exact path='/' component={GreetingContainer} />
        
        <Route exact path="/albums/:albumId" component={AlbumShowContainer} />
    </div>
);

export default App;