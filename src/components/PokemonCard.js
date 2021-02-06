import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    frontSide: true
  }

  render() {
    return (
      <Card onClick={() => this.setState({frontSide: !this.state.frontSide})}>
        <div>
          <div className="image">
            <img src={this.state.frontSide ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back}
            alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
