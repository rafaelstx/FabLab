import React from "react";
import InputPassword from '../../components/input/inputPassword';
import InputLogin from '../../components/input/inputLogin';
import Button from '../../components/button/button';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import './loginStyle.css';

function Login() {
    return (
        <>
            <div className="headerContainer">
                <Header />
            </div>

            <div className="loginContainer">
                <div className="login">
                    <h1 style={{ fontSize: '40px' }}>Login</h1>
                    <InputLogin placeholder="Identificação UNESP" icon="login" alt="User Login Image"/>
                    <InputPassword placeholder="Sua senha" icon="password" alt="Password Login Image"/>
                    <Button text="Entrar" />
                </div>
            </div>

            <div className="footerContainer">
                <Footer />
            </div>
        </>
    );
}

export default Login;
