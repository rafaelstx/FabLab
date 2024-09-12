import React from 'react';
import HeaderCadastro from '../../components/headerCadastro/headerCadastro';
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/menu/menu";
import UserRegistrationFormEquip from "../../components/registrationEquipamento/UserRegistrationFormEquip";

import './cadastroEquipamentoStyle.css';

function CadastroEquipamento() {
  return (
    <>
      <div className="headerContainer">
        <HeaderCadastro />
      </div>
  
      <div className="pageContainer">
        <Sidebar />
        <div className="contentArea">
        <UserRegistrationFormEquip />
        </div>
      </div>
  
      <div className="footerContainer">
        <Footer />
      </div>
    </>
  );
}

export default CadastroEquipamento;
