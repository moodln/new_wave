import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            
            <a href='https://github.com/moodln/new_wave' ><img src={window.github} alt="" /></a>
        </div>
    )
}

export default Footer;