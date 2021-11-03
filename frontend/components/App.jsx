import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/GreetingContainer';
import AlbumIndexContainer from './albums/album_index_container'



const App = () => (
    <div>
        <header className='logo-links-container'>
        <Link to='/'>
            <img src={window.logo} alt="new_wave logo" className='logo' />
        </Link>
        <GreetingContainer />
        </header>

        <AlbumIndexContainer />
    </div>
);

export default App;