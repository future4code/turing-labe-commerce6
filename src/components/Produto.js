import React from 'react';
import styled from 'styled-components'

const ProdutoSingle = styled.div `
  width: 250px;
`

class Produto extends React.Component {
  render() {
  return (
    <ProdutoSingle>
      <img src={this.props.imagem} alt={"imagem"} />
      <p>{this.props.nome}</p>
      <p>R$ {this.props.valor}</p>
    </ProdutoSingle>
  );
  }
}

export default Produto;
