import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [card, setCard] = useState({
    card0:
      "https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png",
    card1:
      "https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png",
    card2:
      "https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png",
    card3:
      "https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png"
  });

  const handleFlip = (e) => {
    const images = {
      card0:
        "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-hearts_nbvwls.png",
      card1:
        "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-diamonds_opxv6b.png",
      card2:
        "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-hearts_njmwml.png",
      card3:
        "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-diamonds_mpn7sm.png"
    };

    setCard({
      ...card,
      [e.target.id]: images[e.target.id]
    });
  };

  if (card.card0.includes("queen") && card.card1.includes("queen")) {
    document.getElementById("game-board").style.opacity = "0.3";
    document.getElementById("message").style.display = "block";
  }

  if (card.card2.includes("king") && card.card3.includes("king")) {
    document.getElementById("game-board").style.opacity = "0.3";
    document.getElementById("message").style.display = "block";
  }

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <nav>
          <a href="#instructions">Instructions</a>
          <a href="#game-board">Game</a>
        </nav>
      </header>

      <main>
        <div>
          <h2 id="instructions">Instructions</h2>
          <p>
            Concentration, also known as Match Match, Memory, Pelmanism,
            Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all
            of the cards are laid face down on a surface and two cards are
            flipped face up over each turn. The object of the game is to turn
            over pairs of matching cards.
          </p>
          <div>
            <div id="message">You found a match!</div>
            <div id="game-board" className="board">
              <img
                id="card0"
                src={card.card0}
                alt="queen"
                onClick={handleFlip}
              />
              <img
                id="card1"
                src={card.card1}
                alt="queen"
                onClick={handleFlip}
              />
              <img
                id="card2"
                src={card.card2}
                alt="king"
                onClick={handleFlip}
              />
              <img
                id="card3"
                src={card.card3}
                alt="king"
                onClick={handleFlip}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="clearfix">
        <p className="copyright">COPYRIGHT 2017</p>
        <p className="message">
          Created with &hearts; by <span className="name">GA</span>
        </p>
      </footer>
    </div>
  );
}
