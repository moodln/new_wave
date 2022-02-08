import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal.jsx';
import SearchBarContainer from '../searchbar/searchbar_container.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchAlbums();
        this.props.fetchArticles();
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

    openModalWithoutErrors(type) {
        if (this.props.errors) {
            this.props.clearErrors();
        }
        this.props.openModal(type)
    }

    logoutUser() {
        this.props.closeModal();
        this.props.logout()
    }

    render() {
    if (this.props.albums == [] || this.props.articles == []) return null; 
    if (this.props.currentUser) {
        
        return (
            <div className='welcome-message'>
                <div className='header-left'>
                        <Link to='/'>
                    <div className="logo">
                            <img src={window.logo} alt="new_wave logo" className='logo' /><p>new wave</p>
                    </div>
                        </Link>
                    <Link to='/albums'>
                        <p>+ add</p>
                    </Link>
                    <SearchBarContainer articles={this.props.articles} albums={this.props.albums}/>
                </div>
                <div className="dropdown">
                    <Link to='/' onClick={logout}>
                        <img src={window.circle} alt="blue_circle" className='circle' />
                    </Link>
                    <div className="dropdown-content">
                        <div className='user-profile'>
                            <Link to={`/users/${this.props.currentUser.id}`}>  
                                <p>{this.props.currentUser.name}</p>
                                <p>view site</p>
                            </Link>
                        </div>
                        <div className='logout'>
                            <Link onClick={this.logoutUser} to='/'> logout </Link>
                        </div>
                         
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Modal />
                    <div className='header-left'>
                        <Link to='/'>
                            <div className="logo">
                                <img src={window.logo} alt="new_wave logo" className='logo' /><p>new wave</p>
                            </div>                        </Link>
                        <SearchBarContainer articles={this.props.articles} albums={this.props.albums}/>
                    </div>
                    <div className='links-container'>
                        <Link to='/' onClick={() => this.openModalWithoutErrors('login')} value='log in'>log in</Link>
                            
                        <Link to='/' onClick={() => this.openModalWithoutErrors('signup')} value='sign up' >sign up</Link>
                            
                        <Link to='/' onClick={this.handleDemoLogin} value='guest user'>guest user</Link>
                    </div>
                </div >
            )
        }
    }
}

export default Header;