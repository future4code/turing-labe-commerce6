import React from 'react';
import styled from 'styled-components'
import Produto from './components/Produto'
import Filtro from './components/Filtro'
import Carrinho from './components/Carrinho'
import ImagemCarrinho from './components/icones/carrinho.svg'

const ContainerDeProdutos = styled.section`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
`;

const DivTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  max-width: 1400px;
  min-width: 1000px;
`;

const DivBlocosProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 8px;
  
`;

const DivPrincipal = styled.div`

`


const DivIconeCarrinho = styled.div`
  box-shadow: black 0px 0px 5px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  img {
    width: 50px;
  }
`

class App extends React.Component {
  state = {
    componenteCarrinho: false,
    valorMinimo: "",
    valorMaximo: "",
    buscar: "",
    arrayCarrinho: [],

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

  renderizaCarrinho = () => {
    this.setState({ componenteCarrinho: !this.state.componenteCarrinho })
  }

  onChangeMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  onChangeMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  funcaoBuscar = (event) => {
    this.setState({ buscar: event.target.value })
  }

  adicionaNoCarrinho = () => {
    const novoProdutoNoCarrinho = {
      id: this.state.id,
      nome: this.state.nome,
      valor:this.state.valor
    };

    const novoArrayDoCarrinho = [novoProdutoNoCarrinho, ...this.state.arrayCarrinho]
    this.setState({arrayCarrinho: novoArrayDoCarrinho});

  };

  render() {
    const itensFiltrados = this.state.arrayProdutos.filter((produto) => {
      if (this.state.valorMinimo === "" && this.state.valorMaximo === "" && this.state.buscar === "") {
        return produto
      } else if ((this.state.valorMinimo <= produto.valor && this.state.valorMaximo >= produto.valor)) {
        return produto
      }else if (this.valorMinimo <= produto.valor) {
        return produto
      } else if (this.valorMaximo >= produto.valor) {
        return produto
      } else if (this.state.buscar.toLowerCase() === produto.nome.toLowerCase()) {
        return produto
      }
    })
    return (
      <div>
        <Filtro
          inputValorMinimo={this.onChangeMinimo}
          inputValorMaximo={this.onChangeMaximo}
          inputBuscar={this.funcaoBuscar}
        />
        <ContainerDeProdutos>
          <DivPrincipal>
            <DivTopContainer>
              <p>Quantidade de produtos: {itensFiltrados.length}</p>
              <select>
                <option>Preco: Crescente</option>
                <option>Preco: Decrescente</option>
              </select>
            </DivTopContainer>
            <DivBlocosProdutos>
              {itensFiltrados.map((elemento) => {
                return <Produto lista={elemento} />
              })}
            </DivBlocosProdutos>
          </DivPrincipal>
          <div>
            {this.state.componenteCarrinho && <Carrinho inforProduto={this.state.arrayProdutos} />}
          </div>
        </ContainerDeProdutos>
        <DivIconeCarrinho onClick={this.renderizaCarrinho}>
          <img src={ImagemCarrinho} />
        </DivIconeCarrinho>
      </div>
    );
  }
}

export default App;
