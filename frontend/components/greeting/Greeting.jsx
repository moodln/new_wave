import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {


    render() {
        const { currentUser, logout } = this.props;
        if (currentUser) {
            return (
                <div>
                    <h1>Welcome, {currentUser.username} !</h1>
                    <br/>
                    <button onClick={logout}>Log Out</button>
                </div>
            )   
        } else {
            return (
                <div>
                    <Link to='/login' onClick={this.props.clearErrors}>Log In</Link>
                    <br/>
                    <Link to='/signup' onClick={this.props.clearErrors}>Sign Up</Link>
                </div>
            )
        }
    }
}

export default Greeting;