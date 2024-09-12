import React from "react";

import {ReactComponent as UnespLogo} from '../../assets/unespLogoWhite.svg';

import './headerStyle.css';
import '../../index.css';

function Header() {
    return(
        <div className="container">
            <UnespLogo className="imgContainer" />
        </div>
    )
}

export default Header;