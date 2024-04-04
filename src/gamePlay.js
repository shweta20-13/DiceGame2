import React, { useState, useEffect } from "react";
import NumberSelector from "./numberSelector";
import Total_Score from "./total_Score";
import RollDice from "./rollDice";
import Rules from "./rules";
import "./App.css";

function GamePlay() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player A", score: 0, rounds: 0 },
    { id: 2, name: "Player B", score: 0, rounds: 0 },
  ]);

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [round, setRound] = useState(0);
  const [showRules,setShowRules]=useState()
  const maxRounds = 10;

  useEffect(() => {
    if (round >= maxRounds) {
      // Game ends after 10 rounds
      const winner = players.reduce((prev, current) =>
        prev.score > current.score ? prev : current
      );
      alert(`Game Over! ${winner.name} wins with a score of ${winner.score}`);
      resetGame();
    }
  }, [round, players]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber);

    const updatedPlayers = players.map((player) => {
      if (player === currentPlayer) {
        if (selectedNumber === randomNumber) {
          return { ...player, score: player.score + randomNumber };
        } else {
          return { ...player, score: player.score - 2 };
        }
      }
      return player;
    });

    setPlayers(updatedPlayers);

    const nextPlayerIndex =
      currentPlayer.id === 1 ? 1 : currentPlayer.id - 2; // Alternate between players
    setCurrentPlayer(players[nextPlayerIndex]);
    setSelectedNumber(undefined);
    setRound(round + 1);
  };

  const resetScore = () => {
    const resetPlayers = players.map((player) => ({
      ...player,
      score: 0,
      rounds: 0,
    }));
    setPlayers(resetPlayers);
    setCurrentPlayer(players[0]);
    setSelectedNumber(undefined);
    setRound(0);
  };

  const resetGame = () => {
    const resetPlayers = players.map((player) => ({
      ...player,
      score: 0,
      rounds: 0,
    }));
    setPlayers(resetPlayers);
    setCurrentPlayer(players[0]);
    setSelectedNumber(undefined);
    setRound(0);
  };

  return (
    <main className="container_M">
      <div className="round"><h1>T_Round: {round}</h1></div>
      <div className="players">
        {players.map((player) => (
          <div key={player.id} className={`player-${player.id}`}>
            <h2 className="player">{player.name}</h2>
            <Total_Score  score={player.score} />
          </div>
        ))}
      </div>
      <div className="top-section">
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      
      <div className="dice-and-button">
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className="btns">
          <button onClick={resetScore}>Reset</button>
          <button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "Show"} Rules
          </button>
        </div>
      </div>
      {showRules && <Rules />}
    </main>
  );
}

export default GamePlay;

