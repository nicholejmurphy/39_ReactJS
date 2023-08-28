import React from "react";
import useFlip from "./hooks/useFlip";
import backOfCard from "./static/back.png";
import "./static/PlayingCard.css";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleIsFacingUp] = useFlip(true);
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
