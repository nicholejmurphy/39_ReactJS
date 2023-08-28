import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import useAxios from "./hooks/useAxios";
import "./static/PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(
    "pokemon",
    `https://pokeapi.co/api/v2/pokemon/`
  );
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((data) => (
          <PokemonCard key={data.id} {...data} />
        ))}
      </div>
      <button onClick={clearPokemon}>Clear Deck</button>
    </div>
  );
}

export default PokeDex;
