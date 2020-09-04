import React from "react";
import PokeTeamSlot from './PokeTeamSlot.js';

class PokeTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div id="pokeTeam">
        {props.pokeTeam.map((pokemon) =>
          <PokeTeamSlot
            key={index}
            index={index}
            pokemon={pokemon}
            addPokemon={props.addPokemon}
          />
        )}
      </div>
    )
  }
}

export default PokeTeam;