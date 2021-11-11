import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal.jsx';

class Header extends React.Component {
    constructor(props) {
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
    if (this.props.currentUser) {
        return (
            <div className='welcome-message'>
                <Link to='/'>
                    <img src={window.logo} alt="new_wave logo" className='logo' />
                </Link>
                <div className="dropdown">
                    <Link to='/' onClick={logout}>
                        <img src={window.circle} alt="blue_circle" className='circle' />
                    </Link>
                    <div className="dropdown-content">
                        <p>hello</p>
                        <Link onClick={this.props.logout} to='/'> logout </Link>
                        <br />
                        <Link to={`/users/${this.props.currentUser.id}`}> profile </Link>
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
                            <Link to='/' onClick={() => this.props.openModal('login')} value='log in'>log in</Link>
                                
                            <Link to='/' onClick={() => this.props.openModal('signup')} value='sign up' >sign up</Link>
                                
                            <Link to='/' onClick={this.handleDemoLogin} value='guest user'>guest user</Link>
                        </div>
                </div >
            )
        }
    }
}

export default Header;