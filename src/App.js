import React from 'react';
import styled from 'styled-components'
import Produto from './components/Produto'
import Filtro from './components/Filtro'
import Carrinho from './components/Carrinho'
import ImagemCarrinho from './components/icones/carrinho.svg'

const ContainerDeProdutos = styled.section`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: ${props => {
      if(props.colunas === false){
        return "1fr"
      } else {
        return "3fr 1fr"
      }
    }
  };
  max-width: 1200px;
  margin: 0 auto;
`;
const DivTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
`;
const DivBlocosProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding-bottom: 8px;
`;
const DivPrincipal = styled.div`
`
const DivIconeCarrinho = styled.div`
  background-color: #ffffff;
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
  }`

class App extends React.Component {
  state = {
    componenteCarrinho: false,
    valorMinimo: "",
    valorMaximo: "",
    buscar: "",
    arrayCarrinho: [],
    inputCrescente: "Crescente",
    valorTotal: 0,

    arrayProdutos: [
      {
        id: 1,
        nome: "Item A",
        imagem: "https://picsum.photos/200/200?a=1",
        valor: 10
      },
      {
        id: 2,
        nome: "Item B",
        imagem: "https://picsum.photos/200/200?a=2",
        valor: 20
      },
      {
        id: 3,
        nome: "Item C",
        imagem: "https://picsum.photos/200/200?a=3",
        valor: 30
      },
      {
        id: 4,
        nome: "Item D",
        imagem: "https://picsum.photos/200/200?a=4",
        valor: 40
      },
      {
        id: 5,
        nome: "Item E",
        imagem: "https://picsum.photos/200/200?a=5",
        valor: 50
      },
      {
        id: 6,
        nome: "Item F",
        imagem: "https://picsum.photos/200/200?a=6",
        valor: 60
      },
      {
        id: 7,
        nome: "Item G",
        imagem: "https://picsum.photos/200/200?a=7",
        valor: 70
      },
      {
        id: 8,
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



  adicionaNoCarrinho = (id) => {
    const adiciona = this.state.arrayProdutos.forEach((item) => {
      if (id === item.id) {
        this.state.arrayCarrinho.push(item)
      }
    })

    let soma = this.state.arrayCarrinho.reduce( (prevValue, numero) => prevValue + numero.valor, 0 )

    this.setState({valorTotal: soma})
  };

  onChangeCrecente = (event) => {
    this.setState({inputCrescente: event.target.value})
      switch (this.state.inputCrescente) {
        case 'Crescente':
          return this.setState({arrayProdutos: this.state.arrayProdutos.sort(function(a, b) {
                return b.valor - a.valor
              })})
        case 'Decrescente':
          return this.setState({arrayProdutos: this.state.arrayProdutos.sort(function(a, b) {
              return a.valor - b.valor
               })})
        default:
          return true
      }
  }

  render() {

    
    
    let itensFiltrados = this.state.arrayProdutos
        if(this.state.valorMinimo !== "") {
          itensFiltrados = itensFiltrados.filter((elemento) => {
            return elemento.valor >= this.state.valorMinimo ? true : false
          })
        }
        if(this.state.valorMaximo !== "") {
          itensFiltrados = itensFiltrados.filter((elemento) => {
            return elemento.valor <= this.state.valorMaximo ? true : false
          })
        }
        if(this.state.buscar !== "") {
            itensFiltrados = itensFiltrados.filter((elemento) => {
            return elemento.nome.toLowerCase().includes(this.state.buscar.toLowerCase()) ? true : false
            })
          }

    return (
      <div>
        <Filtro
          inputValorMinimo={this.onChangeMinimo}
          inputValorMaximo={this.onChangeMaximo}
          inputBuscar={this.funcaoBuscar}
        />
        <ContainerDeProdutos colunas={this.state.componenteCarrinho}>
          <DivPrincipal>
            <DivTopContainer>
              <p>Quantidade de produtos: {itensFiltrados.length}</p>
              <select value={this.state.inputCrescente} onChange={this.onChangeCrecente}>
                <option value="Crescente">Preco: Crescente</option>
                <option value="Decrescente">Preco: Decrescente</option>
              </select>
            </DivTopContainer>
            <DivBlocosProdutos>
              {itensFiltrados.map((elemento) => {
                return <Produto key={elemento.id} lista={elemento} addCarrinho={() => this.adicionaNoCarrinho(elemento.id)}/>
              })}
            </DivBlocosProdutos>
          </DivPrincipal>
          <div>
            {this.state.componenteCarrinho && <Carrinho inforProduto={this.state.arrayCarrinho} total={this.state.valorTotal} />}
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
