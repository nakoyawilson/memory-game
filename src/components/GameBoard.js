import SingleCard from "./SingleCard";
import "./GameBoard.css";

const GameBoard = ({
  cards,
  numPlayers,
  gridSize,
  cardTheme,
  cardDisabled,
  handleCardChoice,
  choiceOne,
  choiceTwo,
  numMoves,
}) => {
  return (
    <main>
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
        <section className="solo">
          <div className="score-container">
            <h2 className="subheading">Time</h2>
            <span className="score">0:00</span>
          </div>
          <div className="score-container">
            <h2 className="subheading">Moves</h2>
            <span className="score">{numMoves}</span>
          </div>
        </section>
      )}
    </main>
  );
};

export default GameBoard;
