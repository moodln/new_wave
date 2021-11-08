import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal.jsx';
import AlbumIndexContainer from '../albums/album_index_container'
import ArticleIndexContainer from '../article/article_index_container';


class Greeting extends React.Component {
    constructor(props){
        super(props);

        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin(e) {
        e.preventDefault();

        const demoUser = {
            username: 'guest',
            email: 'demo@demo.com',
            password: 'password'
        }
        this.props.handleDemo(demoUser);
    }

    render() {
        const { currentUser, logout, openModal } = this.props;
        if (currentUser) {
            return (
                <div>
                    <div className='welcome-message'>
                        {/* <div className='welcome-message-link'> */}
                        <Link to='/'>
                            <img src={window.logo} alt="new_wave logo" className='logo' />
                        </Link>
                        <Link to='/' onClick={logout}>
                                <img src={window.circle} alt="blue_circle" className='circle'/>
                        </Link>
                        {/* </div> */}
                    </div>
                    <ArticleIndexContainer />
                    <AlbumIndexContainer />
                </div>
            )   
        } else {
            return (
                <div>
                    
                    <Modal />
                    <Link to='/'>
                        <img src={window.logo} alt="new_wave logo" className='logo' />
                    </Link>
                            <div className='links-container'>
                                <Link to='/' onClick={() => openModal('login')} value='log in'>log in</Link>
                                
                                <Link to='/' onClick={() => openModal('signup')} value='sign up' >sign up</Link>
                                
                                <Link to='/' onClick={this.handleDemoLogin} value='guest user'>guest user</Link>
                            </div>
                        
                    <ArticleIndexContainer />
                    <AlbumIndexContainer />
                </div>
            )
        }
    }
}

export default Greeting;