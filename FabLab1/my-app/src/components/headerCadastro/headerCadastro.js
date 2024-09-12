import React from "react";
import { ReactComponent as UnespLogo } from '../../assets/unespLogoWhite.svg';
import { ReactComponent as LoginLogo } from '../../assets/loginIconHeader.svg';
import './headerCadastroStyle.css';

function HeaderCadastro() {
  return (
    <div className="container">
      <LoginLogo className="imgContainer" />
      <span className="loginText">login</span>
      <div className="loginContainer">
        <UnespLogo className="loginIcon" />
      </div>
    </div>
  )
}

export default HeaderCadastro;
