import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
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
    if (this.props.currentUser) {
        // console.log(this.props.currentUser)
        return (
            <div className='welcome-message'>
                <div className='header-left'>
                    <Link to='/'>
                        <img src={window.logo} alt="new_wave logo" className='logo' />
                    </Link>
                    <Link to='/albums'>
                        <p>+ add</p>
                    </Link>
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
                    <Link to='/'>
                        <img src={window.logo} alt="new_wave logo" className='logo' />
                    </Link>
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