import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            // errors: this.props.errors
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state);
        debugger
        if (!this.props.errors) {
            this.props.closeModal();
        } 
        
    }

    handleClose() {
        this.props.closeModal();
        // this.setState({
        //     errors: {}
        // })
    }

    update(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value })
    }

    render() {
        // if (this.props.errors !== this.state.errors) {
        //     this.setState({
        //         errors: this.props.errors
        //     })
        // }
        let { formType } = this.props;
        let content;
        let button;
        let ex;
        
        if (formType === 'login') {
            content = 'Log In';
            button = 'Log In';
            ex = '';
            
        } else {
            content = 'Sign up for a new wave account';
            button = 'Sign Up';
            ex = 'X';
        }
        
        return ( 
            <div className='modal-content'>
                <Link to='/' onClick={() => this.handleClose()}>
                    <img src={window.login_logo} alt="new_wave logo" className='login-logo' />
                </Link>
                
                <form onSubmit={this.handleSubmit} className={`session-form ${formType}`}>
                    <div className='session-header'>
                        <h1>{content}</h1>
                        <p>{ex}</p>
                    </div>
                    <div className='session-input'>
                        <div className="sesion-info">
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
                        </div>
                        <button>{button}</button>
                        <div className='session-errors'>
                            {this.props.errors.map(error => 
                                <li key={error.length}>
                                    {error} 
                                </li>)}
                        </div> 
                    </div>
                </form>
            </div>
        )
    }

}

export default SessionForm;