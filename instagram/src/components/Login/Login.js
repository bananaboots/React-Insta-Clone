import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameText: '',
            passwordText: '',
            username: '',
        }
    }

    submitLogin = () => {
        window.localStorage.setItem('username', this.state.usernameText);
        this.setState({
            ...this.state,
            username: window.localStorage.getItem('username')
        })
    }

    changeHandler = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        }, () => {
            if (this.state.usernameText !== '') {
                document.querySelector('.loginbutton').style.backgroundColor = '#5097E9';
            }
            else if (this.state.usernameText === '') {
                document.querySelector('.loginbutton').style.backgroundColor = '#CBE0F8';
            }
        })
    }

    render() {
        return (
            <div className="loginpage">
                <form onSubmit={this.submitLogin}>
                    <img src="instagram_logo.svg" alt="logo"></img>
                    <input onChange={this.changeHandler} name="usernameText" className="login-input" type="text" value={this.state.usernameText} placeholder="Phone number, username, or email" />
                    <input onChange={this.changeHandler} name="passwordText" className="password-input" type="password" value={this.state.passwordText} placeholder="Password" />
                    <button className="loginbutton" type="submit">Log in</button>
                    <div className="orfacebook">
                        <div className="orfacebook-line"></div>
                        <div className="orfacebook-or">OR</div>
                        <div className="orfacebook-line"></div>
                    </div>
                    <img className="facebook" src="loginwithfacebook.png" alt="facebook" />
                    <div className="forgotpassword">Forgot password?</div>
                </form>
                <p>
                </p>
                <div className="app-buttons">
                    <div className="app-store"></div>
                    <div className="google-play"></div>
                </div>
            </div>
        );
    }
}

export default Login;