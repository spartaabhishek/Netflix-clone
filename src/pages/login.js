import React, { Component } from 'react'
import logo from '../svg/logo.svg'
import styled from 'styled-components'
import LoginForm from '../Components/Login/LoginForm'

class login extends Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                    <Logo src={logo} alt="logo" className="logo"/>
                
                </div>
                <LoginForm></LoginForm>
            </div>
        )
    }
}


export default login

//Logo
const Logo=styled.img`
    width:11rem;
    position:absolute;
    top:25%;
    left:11%;
    transform:translate(-50%,-50%);
    margin-left:0;
`;