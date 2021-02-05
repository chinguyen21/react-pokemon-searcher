import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      isToggle: false
    }
  }

  handleToggle = () => {
    this.setState({
      isToggle: !this.state.isToggle
    })
  }


  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleToggle}>
            <img src = {this.state.isToggle ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt="oh no!" />
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
