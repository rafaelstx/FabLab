import React from 'react';
import HeaderCadastro from '../../components/headerCadastro/headerCadastro';
import Footer from "../../components/footer/footer";
import Sidebar from "../../components/menu/menu";
import UserRegistrationForm from "../../components/registration/UserRegistrationForm";

import './cadastroUsuarioStyle.css';


function CadastroUsuario() {

    return (
        <div className='pageContainer'>
          <HeaderCadastro />
          <div className='mainContent'>
            <div className='sidebar'>
              <Sidebar />
            </div>
            <div className='contentArea'>
              <UserRegistrationForm />
            </div>
          </div>
          <Footer />
        </div>
      );
}

export default CadastroUsuario;