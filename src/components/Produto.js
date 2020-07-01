import React from 'react';
import styled from 'styled-components'

const ProdutoSingle = styled.div `
  box-shadow: 1px 1px 5px #000000;
  border-radius: 4px;
  padding: 8px;
  button {
    background-color: #283e4a;
    border: none;
    border-radius: 4px;
    color: #e5e5e5;
    font-weight: bold;
    width: 100%;
    padding: 8px;
    transition: 300ms;
  }
  button:hover {
    background-color: #606060;
  }
  img {
    width: 100%;
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
