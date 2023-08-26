import React, { useEffect, useState, useRef } from "react";
import "./static/Deck.css";
import Card from "./Card";
import axios from "axios";

const BASE_URL = "http://deckofcardsapi.com/api/deck";

const Deck = () => {
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [autoDraw, setAutoDraw] = useState(false);
  const timerRef = useRef(null);

  async function shuffleDeck() {
    const newDeck = await axios.get(`${BASE_URL}/new/shuffle/`);
    setDeck(newDeck.data);
  }
  // Shuffle deck, starting fresh
  useEffect(() => {
    shuffleDeck();
  }, [setDeck]);

  // Draw a Card & setCards
  useEffect(() => {
    async function drawCard() {
      const { deck_id } = deck;
      try {
        const draw = await axios.get(`${BASE_URL}/${deck_id}/draw`);

        if (draw.data.remaining === 0) {
          setAutoDraw(false);
          alert("No cards remiaing.");
          setDeck(null);
        }

        const card = draw.data.cards[0];

        setCards((c) => [
          ...c,
          {
            id: card.code,
            image: card.image,
            name: card.value + "of" + card.suit,
          },
        ]);
      } catch (error) {
        alert(error);
      }
    }

    if (autoDraw && !timerRef.current) {
      timerRef.current = setInterval(async () => {
        await drawCard();
      }, 100);
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [deck, autoDraw, setAutoDraw]);

  // Trigger auto drawing of cards on/off
  function toggleAutoDraw() {
    setAutoDraw((auto) => !auto);
  }
  function startOver() {
    shuffleDeck();
    setCards([]);
  }

  const drawnCards = cards.map((c) => (
    <Card name={c.name} key={c.id} image={c.image} />
  ));

  return (
    <div className="Deck">
      {deck ? (
        <button className="Deck-btn" onClick={toggleAutoDraw}>
          {autoDraw ? "STOP" : "KEEP"} DRAWING FOR ME!
        </button>
      ) : (
        <button className="Deck-btn" onClick={startOver}>
          START OVER
        </button>
      )}

      <div className="Deck-cardarea">{drawnCards}</div>
    </div>
  );
};

export default Deck;
