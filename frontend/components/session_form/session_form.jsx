import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };


    handleSubmit(e) {
        e.preventDefault();
        const user = { user: this.state };
        this.props.processForm(user);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render () {
        let formTypeText;
        let errorList;
        let navLink;

        if (this.props.errors.length > 0) {
            errorList = (
                <ul className="session-form-errors">
                    {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
                </ul>
            )
        };

        if (this.props.formType == 'signup') {
            formTypeText = "Sign Up";
            navLink = <Link to="/login" >or log in instead</Link>
        } else {
            formTypeText = "Log In"
            navLink = <Link to="/signup" >or sign up instead</Link>
        };

        return (
            <div className="columns">
            <div className="left-column">
                <div className="session-form-container">
                    <h3>{formTypeText}</h3>
                    <div className="session-nav-link">
                        {navLink}
                    </div>
                    {errorList}
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <label>Username: </label>
                            <input type="text"
                                onChange={this.handleChange('username')}
                                value={this.state.username}>
                            </input>
                        
                            <label>Password: </label>
                            <input type="password"
                                onChange={this.handleChange('password')}
                                value={this.state.password}>
                            </input>
                            <div className="flex-break"></div>
                            <input type="submit" className="session-form-submit" value={formTypeText} />
                    </form>
                </div>
            </div>
            </div>
        );
    };
}

export default SessionForm;