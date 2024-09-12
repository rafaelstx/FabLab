import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/login/login";
import CadastroEquipamento from "./pages/cadastroEquipamento/cadastroEquipamento"; // Import da nova página
import CadastroUsuario from "./pages/cadastroUsuario/cadastroUsuario"; // Import da nova página
import Home from "./pages/home/home"; // Import da nova página

import './App.css';

function App() {
  return (
    <Router>
      <div className='pageContainer'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro-equipamento" element={<CadastroEquipamento />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
