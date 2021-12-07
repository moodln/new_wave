import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            errors: this.props.errors
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    // componentDidMount() {
    //     if (this.state.errors.length > 1) {
    //         this.setState({
    //             errors: {}
    //         })
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state);
        debugger
        if (this.props.errors.length < 1) {
            this.props.closeModal();
        } 
        
    }

    handleClose() {
        this.props.closeModal();
        this.setState({
            errors: {}
        })
    }

    update(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value })
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (this.props.formType !== prevProps.formType) {
    //         this.props.errors = [];
    //     }
    // }



    render() {
        if (this.props.errors !== this.state.errors) {
            this.setState({
                errors: this.props.errors
            })
        }
        let { errors, formType } = this.props;
        let content;
        let button;
        formType === 'login' ? content = 'Log In' : content = 'Sign up for a new wave account'
        formType === 'login' ? button = 'Log In' : button = 'Sign up'
        return ( 
            <div className='modal-content'>
                <Link onClick={() => this.handleClose()}>
                    <img src={window.login_logo} alt="new_wave logo" className='login-logo' />
                </Link>
                
                <form onSubmit={this.handleSubmit} className={`session-form ${formType}`}>
                    <h1>{content}</h1>
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
                            {this.state.errors}
                        </div> 
                    </div>
                </form>
            </div>
        )
    }

}

export default SessionForm;