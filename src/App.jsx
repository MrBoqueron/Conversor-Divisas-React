import { useState } from 'react';
import './styles.css';

export default function App() {
  const [euros, setEuros] = useState('');

  const handleInput = ({ target }) => {
    setEuros(target.value);
  };

  return (
    <div className='App'>
      <h1>CONVERSOR DE DIVISAS</h1>

      <div className='container1'>
        <div className='tile'>
          <label>Convertir euros a dolares</label>
        </div>
        <br />
        <label>Euros:</label>
        <input
          type='text'
          name=''
          id=''
          className='input'
          onChange={handleInput}
        />
        <br />
        <label>Dolares:</label>
        <input type='text' name='' id='' className='input' disabled />
        <button className='boton-convertir'>Convertir</button>
      </div>
    </div>
  );
}
