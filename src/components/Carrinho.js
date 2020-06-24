import React from 'react';
import styled from 'styled-components'
import { render } from '@testing-library/react';

const DivCarrinho = styled.div`
    width: 500px;
    background-color: red;
`

class Carrinho extends React.Component {
  render() {
  return (
    <DivCarrinho>
      <h1>Carrinho:</h1>
    </DivCarrinho>
  );
  }
}

export default Carrinho;
