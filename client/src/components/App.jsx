//TODO
import React from 'react';
import PokeTeam from './PokeTeam.js'
import getPokemon from '../../../lib/getPokemon.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeTeam: [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    };

    this.addPokemon = this.addPokemon.bind(this);
  }

  addPokemon(query, index) {
    getPokemon(query, ({data}) => {
      let copiedState = [...this.state.pokeTeam]
      copiedState[index] = data;
      this.setState({
        pokeTeam: copiedState
      })
    })
  }

  render() {
    return(
      <div>
        <h1>My PokeTeam!</h1>
        <PokeTeam pokeTeam={this.state.pokeTeam} addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default App;


