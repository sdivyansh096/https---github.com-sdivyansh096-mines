import Square from "./sqaure/Square";
import "./App.css";
import { useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumbers = [];
while (randomNumbers.length < 3) {
  let num = getRandomInt(1, 25);

  if (!randomNumbers.includes(num)) {
    randomNumbers.push(num);
  }
}

function App() {
  const Item = [];
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(100);

  for (let i = 1; i <= 25; i++) {
    if (randomNumbers.includes(i)) {
      Item.push(
        <Square
          key={i}
          mine={true}
          setGameOver={setGameOver}
          gameOver={gameOver}
          setScore={setScore}
        />
      );
    } else {
      Item.push(
        <Square
          key={i}
          setScore={setScore}
          setGameOver={setGameOver}
          gameOver={gameOver}
        />
      );
    }
  }

  return (
    <div className="d-flex gap-10">
      <div className="totalScore">
        <p>Total Score</p>
        <p>{Math.floor(score)} Rs</p>
      </div>

      <div className="d-grid">{Item}</div>
    </div>
  );
}

export default App;
