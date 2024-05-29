import Square from "./sqaure/Square";
import "./App.css";
import { useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumbers() {
  let randomNumbers = [];
  while (randomNumbers.length < 3) {
    let num = getRandomInt(1, 25);
    if (!randomNumbers.includes(num)) {
      randomNumbers.push(num);
    }
  }
  return randomNumbers;
}

function App() {
  const [betAmount, setBetAmount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState(generateRandomNumbers());

  const startGame = () => {
    setScore(betAmount);
    setGameStarted(true);
    setGameOver(false);
    setRandomNumbers(generateRandomNumbers());
  };

  const handleBetChange = (event) => {
    setBetAmount(Number(event.target.value));
  };

  const handleGameOver = () => {
    setGameStarted(false);
    setGameOver(false);
  };

  const cashout = () => {
    // Handle cashout action
    alert(`Cashout: ${Math.floor(score)}`);
    setGameStarted(false);
    setScore(0);
  };

  const Item = [];
  for (let i = 1; i <= 25; i++) {
    Item.push(
      <Square
        key={i}
        mine={randomNumbers.includes(i)}
        setGameOver={setGameOver}
        gameOver={gameOver}
        setScore={setScore}
        handleGameOver={handleGameOver}
      />
    );
  }

  return (
    <div className="d-flex flex-column align-items-center gap-10">
      {!gameStarted ? (
        <div className="bet-section">
          <h1 className="mine">Mines</h1>
          <label htmlFor="betAmount">Enter Bet Amount: </label>
          <input
            type="number"
            id="betAmount"
            value={betAmount}
            onChange={handleBetChange}
          />
          <button className="start-button" onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="totalScore">
            <p>Total Score</p>
            <p>{Math.floor(score)} Rs</p>
          </div>
          <div className="gg">
            <button className="cashout-button" onClick={cashout}>
              Cashout
            </button>
            <div className="d-grid">{Item}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
