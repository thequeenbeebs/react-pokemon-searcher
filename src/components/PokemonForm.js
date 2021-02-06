import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: "",
    hp: "",
    frontImg: "",
    backImg: ""
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let newPokemon = {}
        newPokemon.name = this.state.name
        newPokemon.hp = this.state.hp
        newPokemon.sprites = {
          front: this.state.frontImg,
          back: this.state.backImg
        }
    event.target.reset()
    let reqPack = {}
        reqPack.headers = {"Content-Type": 'application/json'}
        reqPack.method = 'POST'
        reqPack.body = JSON.stringify(newPokemon)

    fetch('http://localhost:3000/pokemon', reqPack)
        .then(resp => resp.json())
        .then(newPoke => this.props.addPoke(newPoke))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" 
              onChange={event => this.setState({name: event.target.value})}
            />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" 
              onChange={event => this.setState({hp: event.target.value})}
            />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" 
              onChange={event => this.setState({frontImg: event.target.value})}
            />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" 
              onChange={event => this.setState({backImg: event.target.value})}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
