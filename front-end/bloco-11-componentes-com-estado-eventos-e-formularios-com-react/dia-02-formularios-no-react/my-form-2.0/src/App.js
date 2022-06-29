import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <form>
        <fieldset className='personal-data'>
          <label>
            Nome:
            <input
              maxLength={40}
              required
              type='text'
            >
            </input>
          </label>
          <label>
            Email:
            <input
              maxLength={50}
              required
              type='text'  
            >
            </input>
          </label>
          <label>
            CPF:
            <input
              maxLength={11}
              required
              type='text'  
            >
            </input>
          </label>
          <label>
            Endereço:
            <input
              maxLength={200}
              required
              type='text'  
            >
            </input>
          </label>
          <label>
            Cidade:
            <input
              maxLength={28}
              required
              type='text'  
            >
            </input>
          </label>
          <label>
            Estado:
            <select
              required
            >
              <option>Paraná</option>
              <option>Acre</option>
            </select>
          </label>
          <p>Tipo:</p>
          <label>
            Casa
            <input
              required
              type='radio'  
            >
            </input>
          </label>
          <label>
            Apartamento
            <input
              required
              type='radio'  
            >
            </input>
          </label>
        </fieldset>
        <fieldset className='professional-data'>
          <label>Resumo do Currículo:
            <textarea maxLength={1000} required>
            </textarea>
          </label>
          <label>Cargo:
            <textarea maxLength={40} required>
            </textarea>
          </label>
          <label>Descrição do Cargo:
            <input maxLength={500} required type='text'>
            </input>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default App;
