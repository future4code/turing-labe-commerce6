import React from 'react';
import styled from 'styled-components'
import { render } from '@testing-library/react';

const DivCarrinho = styled.div`
    width: 300px;
    height: 600px;
    border: 1px solid black;
    padding: 16px;
`

class Carrinho extends React.Component {

  componentDidUpdate() {
    
  }

  render() {
  return (
    <DivCarrinho>
      <h1>Carrinho:</h1>
      {this.props.inforProduto.map((elemento) => {
        return (
          <p> {elemento.nome}: {elemento.valor}</p>
        )
      })}
      <p>Total: <strong>R$</strong></p>
    </DivCarrinho>
  );
  }
}

export default Carrinho;
