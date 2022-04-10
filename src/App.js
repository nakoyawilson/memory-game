import { useState, useEffect } from "react";
import uuid from "react-uuid";
import {
  faAnchor,
  faAppleWhole,
  faBasketShopping,
  faBug,
  faCandyCane,
  faCar,
  faFlask,
  faFutbol,
  faGhost,
  faGift,
  faHandSpock,
  faPenNib,
  faPuzzlePiece,
  faRocket,
  faSnowflake,
  faSun,
  faUmbrella,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import GameSetupForm from "./components/GameSetupForm";
import SingleCard from "./components/SingleCard";
import "./App.css";

const themes = {
  numbers: [
    { value: "1", matched: false },
    { value: "2", matched: false },
    { value: "3", matched: false },
    { value: "4", matched: false },
    { value: "5", matched: false },
    { value: "6", matched: false },
    { value: "7", matched: false },
    { value: "8", matched: false },
    { value: "9", matched: false },
    { value: "10", matched: false },
    { value: "11", matched: false },
    { value: "12", matched: false },
    { value: "13", matched: false },
    { value: "14", matched: false },
    { value: "15", matched: false },
    { value: "16", matched: false },
    { value: "17", matched: false },
    { value: "18", matched: false },
  ],
  icons: [
    { value: faAnchor, matched: false },
    { value: faFlask, matched: false },
    { value: faSun, matched: false },
    { value: faHandSpock, matched: false },
    { value: faMoon, matched: false },
    { value: faCar, matched: false },
    { value: faSnowflake, matched: false },
    { value: faAppleWhole, matched: false },
    { value: faBasketShopping, matched: false },
    { value: faCandyCane, matched: false },
    { value: faGift, matched: false },
    { value: faPenNib, matched: false },
    { value: faPuzzlePiece, matched: false },
    { value: faUmbrella, matched: false },
    { value: faRocket, matched: false },
    { value: faGhost, matched: false },
    { value: faBug, matched: false },
    { value: faFutbol, matched: false },
  ],
};

const App = () => {
  const [cardTheme, setCardTheme] = useState(null);
  const [numPlayers, setNumPlayers] = useState(null);
  const [gridSize, setGridSize] = useState(null);
  const [cards, setCards] = useState(null);
  const [numMoves, setNumMoves] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [cardDisabled, setCardDisabled] = useState(false);

  const setupGame = (e) => {
    e.preventDefault();
    setCardTheme(e.target.theme.value);
    setNumPlayers(e.target.players.value);
    setGridSize(e.target.grid.value);
  };

  useEffect(() => {
    const shuffleCards = () => {
      const unpairedCards =
        gridSize === "4" ? themes[cardTheme].slice(0, 8) : themes[cardTheme];
      const shuffledCards = [...unpairedCards, ...unpairedCards]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: uuid() }));
      setCards(shuffledCards);
      setChoiceOne(null);
      setChoiceTwo(null);
      setNumMoves(0);
    };
    if (cardTheme && gridSize) {
      shuffleCards();
    }
  }, [cardTheme, numPlayers, gridSize]);

  const handleCardChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setNumMoves((prevNumMoves) => prevNumMoves + 1);
    setCardDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setCardDisabled(true);
      if (choiceOne.value === choiceTwo.value) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            return card.value === choiceOne.value
              ? { ...card, matched: true }
              : card;
          });
        });
      }
      setTimeout(() => resetTurn(), 1000);
    }
  }, [choiceOne, choiceTwo]);

  return (
    <>
      <GameSetupForm setupGame={setupGame} />
      {/* <!-- Game board start --> */}
      {cards && <div>Restart New Game</div>}
      <div
        className={`game-grid ${
          gridSize === "4" ? "four-by-four" : "six-by-six"
        }`}
      >
        {cards &&
          cards.map((card) => (
            <SingleCard
              key={card.id}
              cardTheme={cardTheme}
              card={card}
              cardDisabled={cardDisabled}
              handleCardChoice={handleCardChoice}
              cardFlipped={
                card === choiceOne || card === choiceTwo || card.matched
              }
            />
          ))}
      </div>
      {numPlayers && numPlayers !== "1" && (
        <div>
          {/* <!-- Multiplayer scores start --> */}
          Player 1{/* <!-- P1 score --> */}
          Current Turn Player 2{/* <!-- P2 score --> */}
          Current Turn Player 3{/* <!-- P3 score --> */}
          Current Turn Player 4{/* <!-- P4 score --> */}
          Current Turn
          {/* <!-- Multiplayer scores start --> */}
        </div>
      )}
      {numPlayers === "1" && (
        <div>
          {/* <!-- Time elapsed -->  */}
          Time
          {/* <!-- Moves total --> */}
          Moves: {numMoves}
        </div>
      )}
      {/* <!-- Game board end --> */}
    </>
  );
};

export default App;
