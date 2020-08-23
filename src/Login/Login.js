import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './Login.scss'
import InputField from '../InputField/InputField'

function warning(text) {
    ReactDOM.render(<p style={{color: 'red'}}>{text}</p>, document.getElementById('warning'))
}

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailOrUsername: '',
            password: '',
            newPassword: '',
            confirmPassword: ''
        }
        this.createAccount = this.createAccount.bind(this)
    }
    createAccount(e) {
        var newPassword = document.getElementById('newPassword')
        var confirmPassword = document.getElementById('confirmPassword')
        var email = document.getElementById('email')
        if (newPassword.value === confirmPassword.value && newPassword.value !== '' && confirmPassword.value !== '' && email.value !== '') {
            if (!(email.value.includes("@"))) {
                email.style.border = "2.5px solid red"
                warning("Invalid email!")
                return;
            }
            else {
                ReactDOM.render(null, document.getElementById('warning'))
                console.log("Hello")
                // POST to db here
            }
        }
        else if (email.value === '') {
            email.style.border = "2.5px solid red"
            warning("An email is required!")
        }
        else if (newPassword.value === '') {
            newPassword.style.border = "2.5px solid red"
            warning("A password is required!")
        }
        else if (confirmPassword.value === '' ) {
            confirmPassword.style.border = "2.5px solid red"
            warning("Please confirm your password!")
        }
        else if (newPassword.value !== confirmPassword.value) {
            newPassword.style.border = "2.5px solid red"
            confirmPassword.style.border = "2.5px solid red"
            warning("Passwords do not match!")
        }
        else {
            warning("Oops! Something went wrong.")
        }

    }
    render() {
        var inputElements = document.getElementsByClassName('inputInfo')
        for (var element of inputElements) {
            element.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    e.preventDefault()
                    document.getElementById('createAccount').click()
                }
            })
        }
        return (    
            <form onSubmit={e => e.preventDefault()}>
                <div className="border">
                    {window.location.pathname === "/login" ?
                        <div>
                            <InputField label="Email or Username:" id="emailOrUsername" />
                            <InputField type="password" label="Password:" id="password" additionalElements={
                                <span>
                                    <Link to="/createAccount">Create account</Link>
                                    <Link to='/forgotPassword'>Forgot Password?</Link>
                                </span>
                            }/>
                            <div className="submit">
                                <button type="submit" id="login">Log In</button>
                            </div>
                            <hr></hr>
                            <div className="submit">
                                <button type="submit" id="google-login" onClick={e => e.preventDefault()}>Log In With Google<br></br>This button does nothing!</button>
                            </div>
                        </div>
                        :
                        <div>
                            <InputField label="Email:" id="email" />
                            <InputField type="password" label="New Password: " id="newPassword" />
                            <InputField type="password" label="Confirm Password:" id="confirmPassword" additionalElements={
                                <span><Link to="/login">Already have an account? Log in</Link></span>
                            }/>
                            <div id="warning"></div>
                            <div className="submit">
                                <button type="submit" id="createAccount" onClick={this.createAccount}>Create Account</button>
                            </div>
                            <hr></hr>
                            <div className="submit">
                                <button type="submit" id="create-google-login" onClick={e => e.preventDefault()}>Create an account with Google<br></br>This button does nothing!</button>
                            </div>
                        </div>
                    }
                </div>
            </form>
        )
    }
}