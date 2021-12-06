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
        let button;
        formType === 'login' ? content = 'Log In' : content = 'Sign up for a new wave account'
        formType === 'login' ? button = 'Log In' : button = 'Sign up'
        return ( 
            <div className='modal-content'>
                <Link onClick={() => this.props.closeModal()}>
                    <img src={window.login_logo} alt="new_wave logo" className='login-logo' />
                </Link>
                <p>{errors}</p>
                <form onSubmit={this.handleSubmit} className={`session-form ${formType}`}>
                    <h1>{content}</h1>
                    <div className='session-input'>
                        <label>Username 
                            <input type="text" 
                                value={this.state.username} 
                                onChange={this.update('username')} />
                        </label>
                        <label>Email 
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')} />  
                        </label>  

                        <label>Password 
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')} />
                        </label>
                        <button>{button}</button>
                    </div>

                </form>
            </div>
        )
    }

}

export default SessionForm;