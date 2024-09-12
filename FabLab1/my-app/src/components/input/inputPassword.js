import React from "react";

import './inputPassword.css';

import {ReactComponent as PasswordLogo} from '../../assets/passwordIcon.svg';

function InputPassword(props) {
    
    return (
        <div className="inputContainer">
             <PasswordLogo className="iconContainer" />
            <input type={(props.icon === "password") ? "password" : "text"} placeholder={props.placeholder}></input>
        </div>
    )
}


export default InputPassword;