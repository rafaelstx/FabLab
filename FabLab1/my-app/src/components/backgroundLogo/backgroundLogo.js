import React from 'react';

import {ReactComponent as UnespLogoBlackBackground} from '../../assets/unespLogoBlack.svg'

import './backgroundLogoStyle.css';


function BackgroundLogo() {
    return (

        <div className="containerBackground">
            <UnespLogoBlackBackground className="imgContainerBackground" />
        </div>
        
    );
}

export default BackgroundLogo;