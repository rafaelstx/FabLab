import React from 'react';
import { NavLink } from 'react-router-dom';
import './menuStyle.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? 'selected' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/agendamentos" className={({ isActive }) => (isActive ? 'selected' : '')}>
            Agendamentos
          </NavLink>
        </li>
        <li>
          <NavLink to="/cadastro-equipamento" className={({ isActive }) => (isActive ? 'selected' : '')}>
            Equipamentos
          </NavLink>
        </li>
        <li>
          <NavLink to="/cadastro-usuario" className={({ isActive }) => (isActive ? 'selected' : '')}>
            Usuários
          </NavLink>
        </li>
        <li>
          <NavLink to="/sair" className={({ isActive }) => (isActive ? 'selected' : '')}>
            Sair
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
