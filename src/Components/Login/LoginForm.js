import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className="form-containe">
                    <form>
                        <h1>
                            sign in
                        </h1>
                        <div className="input-container">
                            <input type='email' required></input>
                            <label>Email or Phone Number</label>
                        </div>
                        <div className="input-container">
                            <input type='password' required></input>
                            <label>Password</label>
                        </div>
                    </form>
                
                </div>
            </div>
        )
    }
}

export default  LoginForm;