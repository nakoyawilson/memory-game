import logo from "../assets/logo-light.svg";
import "./GameSetupForm.css";

const GameSetupForm = ({ setupGame, showStartModal }) => {
  return (
    <section className={`setup-game ${showStartModal ? "show" : ""}`}>
      <img src={logo} className="logo" alt="Memory game logo" />
      <form onSubmit={setupGame} className="setup-form">
        <div className="question-wrapper">
          <h2 className="question-heading">Select Theme</h2>
          <div className="label-container">
            <label>
              <input
                type="radio"
                name="theme"
                value="numbers"
                defaultChecked
                className="visually-hidden radio-button"
              />
              <span className="form-label">Numbers</span>
            </label>
            <label>
              <input
                type="radio"
                name="theme"
                value="icons"
                className="visually-hidden radio-button"
              />
              <span className="form-label">Icons</span>
            </label>
          </div>
        </div>
        <div className="question-wrapper">
          <h2 className="question-heading">Number of Players</h2>
          <div className="label-container">
            <label>
              <input
                type="radio"
                name="players"
                value="1"
                defaultChecked
                className="visually-hidden radio-button"
              />
              <span className="form-label">1</span>
            </label>
            <label>
              <input
                type="radio"
                name="players"
                value="2"
                className="visually-hidden radio-button"
              />
              <span className="form-label">2</span>
            </label>
            <label>
              <input
                type="radio"
                name="players"
                value="3"
                className="visually-hidden radio-button"
              />
              <span className="form-label">3</span>
            </label>
            <label>
              <input
                type="radio"
                name="players"
                value="4"
                className="visually-hidden radio-button"
              />
              <span className="form-label">4</span>
            </label>
          </div>
        </div>
        <div className="question-wrapper">
          <h2 className="question-heading">Grid Size</h2>
          <div className="label-container">
            <label>
              <input
                type="radio"
                name="grid"
                value="4"
                defaultChecked
                className="visually-hidden radio-button"
              />
              <span className="form-label">4x4</span>
            </label>
            <label>
              <input
                type="radio"
                name="grid"
                value="6"
                className="visually-hidden radio-button"
              />
              <span className="form-label">6x6</span>
            </label>
          </div>
        </div>
        <button className="start-btn">Start Game</button>
      </form>
    </section>
  );
};

export default GameSetupForm;
