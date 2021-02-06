import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchValue: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokeData => this.setState({pokemon: pokeData}))
  }
  
  handleSearch = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  addPoke = (newPoke) => {
    this.setState({
      pokemon: [...this.state.pokemon, newPoke]
    })
  }

  render() {
    let filteredPokemon = this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchValue))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPoke}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemon={filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
