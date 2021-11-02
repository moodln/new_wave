import React from 'react';
import { Link } from 'react-router-dom';

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
        const { currentUser, logout } = this.props;
        if (currentUser) {
            return (
                <div className='welcome-message'>
                    <h1>Welcome, {currentUser.username} !</h1>
                    <br/>
                    <div className='welcome-message-link'>
                    <Link to='/' onClick={logout}>logout</Link>
                    </div>
                </div>
            )   
        } else {
            return (
                <div className='links-container'>
                    <Link to='/signup' onClick={this.props.clearErrors}>sign up</Link>
                    <br /><p />
                    <Link to='/login' onClick={this.props.clearErrors}>log in</Link>
                    <br/><p/>
                    <Link to='/' onClick={this.handleDemoLogin} value='guest user'>guest user</Link>
                </div>
            )
        }
    }
}

export default Greeting;