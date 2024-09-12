import React, { useState } from 'react';
import './UserRegistrationFormEquipStyle.css';

function UserRegistrationFormEquip() {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [category, setCategory] = useState('Impressora 3d – Filamento'); // Estado para a categoria
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Ativo'); // Estado para o status do equipamento

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log({ name, model, purchaseDate, category, description, status });
  };

  return (
    <div className='userRegistrationFormEquip'>
      <h1>Cadastrar novo equipamento</h1>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nome do equipamento'
          />
        </div>
        <div className='formGroup'>
          <input
            type='text'
            id='model'
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder='Modelo'
          />
        </div>
        <div className='formGroup'>
          <input
            type='date'
            id='purchaseDate'
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            placeholder='Data de compra'
          />
        </div>
        <label htmlFor='category'>Categoria</label>
        <div className='formGroup'>
          <select
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value='Impressora 3d – Filamento'>Impressora 3d – Filamento</option>
            <option value='Computador'>Computador</option>
            <option value='Monitor'>Monitor</option>
            <option value='Outro'>Outro</option>
          </select>
        </div>



        <div className='formGroup'>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Descrição (máx. 150 palavras)'
            maxLength={150}
            rows={5}
          />
          <div className="charCount">{description.length}/150</div>
        </div>
        <div className='formGroup'>
          <button type='button'>Voltar</button>
          <button type='submit'>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default UserRegistrationFormEquip;
