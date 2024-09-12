import React from 'react';

import {ReactComponent as UnespLogoBlack} from '../../assets/unespLogoBlack.svg'

import './footerStyle.css';


function Footer() {
    return (
        <div className="containerFooter">
            <UnespLogoBlack className="imgContainerFooter" />
            <p className="footerText">
                Desenvolvido por dev-1, dev-2 e dev-3 <br />
                &copy; 2023 Todos os Direitos Reservados
            </p>
        </div>
    );
}



export default Footer;