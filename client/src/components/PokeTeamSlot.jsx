//TODO
import React from "react";
import PokeForm from './PokeForm.jsx'
const PokeTeamSlot = (props) => (
  (props.pokemon) ?
    (
      <div className="pokeTeamSlot">
          <div>Name: {props.pokemon.name}</div>
          <div>Id: {props.pokemon.id}</div>
          <img src={props.pokemon.sprites.front_default} alt="pokemon image"/>
      </div>
    )
  : )
      <PokeForm addPokemon={props.addPokemon} index={props.index} />
    )
)

export default PokeTeamSlot;

