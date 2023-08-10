import React from "react";
import "./static/pokecard.css";

const Pokecard = (props) => {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{props.name}</h4>
      <img
        className="Pokecard-img"
        alt="pokecard"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      ></img>
      <p className="Pokecard-type">Type: {props.type}</p>
      <p className="Pokecard-exp">EXP: {props.base_experience}</p>
    </div>
  );
};

export default Pokecard;
