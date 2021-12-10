import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>
                <a href='https://github.com/moodln/new_wave' ><img src={window.github} alt="" /></a>
                <a href='https://www.linkedin.com/in/madeline-wilson-044a19226/' ><img src={window.linkedin} alt="" /></a>
            </div>
        </div>
    )
}

export default Footer;