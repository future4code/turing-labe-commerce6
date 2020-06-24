import React from 'react';
import styled from 'styled-components'
import Produto from './components/Produto'
import Filtro from './components/Filtro'
import Carrinho from './components/Carrinho'

const ContainerDeProdutos = styled.section `
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
`;

const DivTopContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivBlocosProdutos = styled.div `
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

class App extends React.Component {
  state = {
    arrayProdutos: [
      {
        id: Date.now(),
        nome: "Item A",
        imagem: "https://picsum.photos/200/200?a=1",
        valor: 10
      },
      {
        id: Date.now(),
        nome: "Item B",
        imagem: "https://picsum.photos/200/200?a=2",
        valor: 20
      },
      {
        id: Date.now(),
        nome: "Item C",
        imagem: "https://picsum.photos/200/200?a=3",
        valor: 30
      },
      {
        id: Date.now(),
        nome: "Item D",
        imagem: "https://picsum.photos/200/200?a=4",
        valor: 40
      },
      {
        id: Date.now(),
        nome: "Item E",
        imagem: "https://picsum.photos/200/200?a=5",
        valor: 50
      },
      {
        id: Date.now(),
        nome: "Item F",
        imagem: "https://picsum.photos/200/200?a=6",
        valor: 60
      },
      {
        id: Date.now(),
        nome: "Item G",
        imagem: "https://picsum.photos/200/200?a=7",
        valor: 70
      },
      {
        id: Date.now(),
        nome: "Item H",
        imagem: "https://picsum.photos/200/200?a=8",
        valor: 80
      }
    ]
  }
  render() {
  return (
    <div>
      <Filtro />
      <ContainerDeProdutos>
        <div>
          <DivTopContainer>
            <p>Quantidade de produtos:</p>
            <select>
              <option>Preco: Crescente</option>
              <option>Preco: Decrescente</option>
            </select>
          </DivTopContainer>
          <DivBlocosProdutos>
            {this.state.arrayProdutos.map(produto => {
              return (
                <div>
                  <Produto
                    key={produto.id}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    valor={produto.valor}
                  />
                  <button>Adicionar ao carrinho</button>
                </div>
                  )})}
          </DivBlocosProdutos>
        </div>
      </ContainerDeProdutos>
      <Carrinho />
    </div>
  );
  }
}

export default App;
