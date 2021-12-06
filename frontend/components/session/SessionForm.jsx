import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state);
        this.props.closeModal();
    }

    update(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value })
    }

    render() {
        let { errors, formType } = this.props;
        let content;
        formType === 'login' ? content = 'Log In' : content = 'Sign up for a new wave account'
        return ( 
            <div className='modal-content'>
                <Link to='/'>
                    <img src={window.login_logo} alt="new_wave logo" className='login-logo' />
                </Link>
                <p>{errors}</p>
                <form onSubmit={this.handleSubmit} className={`session-form ${formType}`}>
                    <h1>{content}</h1>
                    {/* <div className='username'> */}
                    <label>Username </label>
                        <input type="text" 
                            value={this.state.username} 
                            onChange={this.update('username')} />
                    {/* </div> */}
                    {/* <div className='email'> */}
                    <label>Email </label>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />    
                    {/* </div> */}
                    {/* <div className='password'> */}
                    <label>Password </label>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    {/* </div> */}
                    <button>{formType}</button>

                </form>
            </div>
        )
    }

}

export default SessionForm;