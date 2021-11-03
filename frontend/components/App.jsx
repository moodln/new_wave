import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/GreetingContainer';
import Modal from './modal/Modal.jsx';


const App = () => (
    <div>
        <Modal />
        <header className='logo-links-container'>
        <Link to='/'>
            <img src={window.logo} alt="new_wave logo" className='logo' />
        </Link>
        <GreetingContainer />
        </header>
    </div>
);

export default App;