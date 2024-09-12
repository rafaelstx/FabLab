import React, { useState } from 'react';
import './UserRegistrationFormStyle.css';

function UserRegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState(''); // Estado para o papel do usuário
  const [isAdmin, setIsAdmin] = useState(false); // Estado para controle de administrador

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log({ name, birthdate, gender, phone, role, isAdmin });
  };

  return (
    <div className='userRegistrationForm'>
      <h1>Cadastrar novo usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nome do usuário'
          />
        </div>
        <div className='formGroup'>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </div>
        <div className='formGroup'>
          <input
            type='date'
            id='birthdate'
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            placeholder=' '
          />
        </div>
        <div className='formGroup'>
          <input
            type='text'
            id='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder='Gênero'
          />
        </div>
        <div className='formGroup'>
          <input
            type='text'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Telefone/Celular'
          />
        </div>
        <div className='formGroup checkboxes'>
          <label>
            <span className='checkbox-label'>Administrador</span>
            <input
              type='checkbox'
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </label>
          <label>
            <span className='checkbox-label'>Usuário</span>
            <input
              type='checkbox'
              checked={!isAdmin}
              onChange={(e) => setIsAdmin(!e.target.checked)}
            />
          </label>
        </div>
        <div className='formGroup'>
          <button type='button'>Voltar</button> {/* Botão "Voltar" */}
          <button type='submit'>Cadastrar</button> {/* Botão "Cadastrar" */}
        </div>
      </form>
    </div>
  );
}

export default UserRegistrationForm;
