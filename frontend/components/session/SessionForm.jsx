import React from 'react';

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
    }

    update(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value })
    }

    render() {
        const { errors, formType } = this.props;
        let content;
        formType === 'login' ? content = 'Log In' : 'Sign up for a new wave account!'
        return ( 
            <div>
                <p>{errors}</p>
                <form onSubmit={this.handleSubmit}>
                    <h1>{content}</h1>
                    <label>Username: 
                        <input type="text" 
                            value={this.state.username} 
                            onChange={this.update('username')} />
                    </label>
                    <label>Email: 
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />    
                    </label>
                    <label>Password: 
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                    </label>
                    <button>open sesame</button>
                </form>
            </div>
        )
    }

}

export default SessionForm;