import React from 'react';
import styled from 'styled-components'
import { render } from '@testing-library/react';

class Filtro extends React.Component {
  render() {
  return (
    <div>
      <fieldset>
        <h1>Filtros:</h1>
        <label for="minimo">Valor Mínimo:</label>
          <input name="minimo" type="number" />
        <label for="maximo">Valor Máximo:</label>
          <input name="maximo" type="number" />
        <label for="buscar">Buscar Produto</label>
          <input name="buscar" type="text" />
      </fieldset>
    </div>
  );
  }
}

export default Filtro;
