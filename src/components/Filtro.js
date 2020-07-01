import React from 'react';
import styled from 'styled-components'
import { render } from '@testing-library/react';

const DivFiltros = styled.div `
  input {
    margin-right: 60px;
  }
`

class Filtro extends React.Component {
  render() {
  return (
    <DivFiltros>
      <fieldset>
        <h1>Filtros:</h1>
        <label for="minimo">Valor Mínimo</label>
          <input onChange={this.props.inputValorMinimo} name="minimo" type="number" />
        <label for="maximo">Valor Máximo</label>
          <input onChange={this.props.inputValorMaximo} name="maximo" type="number" />
        <label for="buscar">Buscar Produto</label>
          <input onChange={this.props.inputBuscar} name="buscar" type="text" />
      </fieldset>
    </DivFiltros>
  );
  }
}

export default Filtro;
