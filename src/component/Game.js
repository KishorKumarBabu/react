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
    <div className="bg-gradient-to-br from-indigo-100 to-blue-50 rounded-2xl p-8 max-w-md mx-auto mt-10 text-center shadow-lg font-sans">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">
        🎮 Rock, Paper, Scissors
      </h2>

      <div>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => play(choice)}
            className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 m-2 rounded-xl shadow-md hover:bg-indigo-800 hover:scale-105 transition-all"
          >
            {choice}
          </button>
        ))}
      </div>

      <div className="mt-8 text-gray-800 text-base leading-relaxed">
        <p>
          Your Choice: <strong className="text-blue-600">{playerChoice}</strong>
        </p>
        <p>
          Computer's Choice:{" "}
          <strong className="text-blue-600">{computerChoice}</strong>
        </p>
        <h3 className="mt-4 text-xl font-bold text-gray-900">{result}</h3>
      </div>
    </div>
  );
};

export default RockPaperScissors;
