import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const { pokemon, exp, isWinner } = this.props;
    let title;
    if (isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Loser Hand</h1>;
    }
    const mappedPokemon = pokemon.map(p => {
      return (
        <Pokecard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience}
        />
      );
    });
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {exp}</h4>
        <div className="Pokedex-cards">{mappedPokemon}</div>
      </div>
    );
  }
}

export default Pokedex;
