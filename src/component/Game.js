import { useState } from "react";


const choices = ["Rock", "Paper", "Scissors"];

const getResult = (player, computer) => {
  if (player === computer) return "Draw!";
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "You Win!";
  }
  return "You Lose!";
};

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const play = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const gameResult = getResult(choice, compChoice);

    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    setResult(gameResult);
  };

  return (
    <div className="rps-container">
      <h2>🎮 Rock, Paper, Scissors</h2>
      <div>
        {choices.map((choice) => (
          <button key={choice} className="rps-button" onClick={() => play(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="rps-result">
        <p>Your Choice: <strong>{playerChoice}</strong></p>
        <p>Computer's Choice: <strong>{computerChoice}</strong></p>
        <h3>{result}</h3>
      </div>
    </div>
  );
};

export default RockPaperScissors;
