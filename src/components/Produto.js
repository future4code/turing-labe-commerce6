import React from 'react';
import styled from 'styled-components'

const ProdutoSingle = styled.div `
  border: 1px dotted black;
  margin: 10px;
  padding: 8px;
  button {
    width: 100%;
    padding: 4px;
  }
  width: 250px;
  img {
    width: 250px;
  }
`

class Produto extends React.Component {
  render() {
  return (
    <ProdutoSingle>
       <img src={this.props.lista.imagem} alt={"imagem"} />
       <p>{this.props.lista.nome}</p>
       <p>R$ {this.props.lista.valor}</p>
       <button onClick={this.props.addCarrinho}>Adicionar ao carrinho</button>
     </ProdutoSingle>
    )
  }
}

export default Produto;
