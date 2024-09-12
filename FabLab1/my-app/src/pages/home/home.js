import React from 'react';
import HeaderCadastro from '../../components/headerCadastro/headerCadastro';
import Footer from "../../components/footer/footer";
import BackgroundLogo from "../../components/backgroundLogo/backgroundLogo";
import Sidebar from "../../components/menu/menu";

import './homeStyle.css';

function Home() {
  return (
    <>
      <div className="headerContainer">
        <HeaderCadastro />
      </div>

      <div className="pageContainer">
        <Sidebar />
        <div className="contentContainer">
          <BackgroundLogo />
        </div>
      </div>

      <div className="footerContainer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
