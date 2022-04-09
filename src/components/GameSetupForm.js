const GameSetupForm = ({ setupGame }) => {
  return (
    <form onSubmit={setupGame}>
      <div>
        <span>Select Theme</span>
        <label>
          <input type="radio" name="theme" value="numbers" defaultChecked />
          <span>Numbers</span>
        </label>
        <label>
          <input type="radio" name="theme" value="icons" />
          <span>Icons</span>
        </label>
      </div>
      <div>
        <span>Number of Players</span>
        <label>
          <input type="radio" name="players" value="1" defaultChecked />
          <span>1</span>
        </label>
        <label>
          <input type="radio" name="players" value="2" />
          <span>2</span>
        </label>
        <label>
          <input type="radio" name="players" value="3" />
          <span>3</span>
        </label>
        <label>
          <input type="radio" name="players" value="4" />
          <span>4</span>
        </label>
      </div>
      <div>
        <span>Grid Size</span>
        <label>
          <input type="radio" name="grid" value="4" defaultChecked />
          <span>4x4</span>
        </label>
        <label>
          <input type="radio" name="grid" value="6" />
          <span>6x6</span>
        </label>
      </div>
      <button>Start Game</button>
    </form>
  );
};

export default GameSetupForm;
