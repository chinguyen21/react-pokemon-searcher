import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

let URL = "http://localhost:3001/pokemon"
let POKEMON =[]

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemons: []
    }
  }


  componentDidMount() {
    fetch(URL)
    .then(res=> res.json())
    .then(pokemonData => {
      POKEMON = pokemonData
      this.setState({
        pokemons: pokemonData
      })
    })
  }


  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      pokemons: POKEMON.filter(pokemon => pokemon.name.includes(event.target.value))
    })
  }


  handleAddPokemon = (event) => {
    let newPokemon = {
      name: event.target.name.value,
      hp: event.target.hp.value,
      sprites: {
        front: event.target.frontUrl.value,
        back: event.target.backUrl.value
      }
    }

    let reqPackage = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPokemon)
    }

    fetch(URL, reqPackage)
    .then(res => res.json())
    .then(newPokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, newPokemon]
      })
    })
    event.target.reset()

  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleAddPokemon={this.handleAddPokemon}/>
        <br />
        <Search handleChange = {this.handleChange}/>
        <br />
        <PokemonCollection pokemonData={this.state.pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage;
