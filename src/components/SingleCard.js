import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleCard.css";

const SingleCard = ({
  cardTheme,
  card,
  cardDisabled,
  handleCardChoice,
  cardFlipped,
}) => {
  const handleClick = () => {
    if (!cardDisabled) {
      handleCardChoice(card);
    }
  };
  return (
    <div className="card">
      <div
        className={`${cardFlipped ? "flipped" : ""} ${
          card.matched ? "matched" : ""
        }`}
      >
        <span className="card-front">
          {cardTheme === "icons" ? (
            <FontAwesomeIcon icon={card.value} />
          ) : (
            card.value
          )}
        </span>
        <span className="card-back" onClick={handleClick}></span>
      </div>
    </div>
  );
};

export default SingleCard;
