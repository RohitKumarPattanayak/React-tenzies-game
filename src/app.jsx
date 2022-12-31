import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "./components/Confetti";
import Timer from "./components/Timer";
import Turns from "./components/Turns";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Toast from "./components/Toast";
export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [firstClick, setFirstClick] = React.useState(false);
  const [turnCount, setTurnCount] = React.useState(-1);
  React.useEffect(() => {
    let allHeld = dice.every((die) => die.isHeld === true);
    if (allHeld) {
      let value = dice[0].value;
      let allSame = dice.every((die) => die.value === value);
      setTenzies(allSame);
      if (allSame) {
        setFirstClick(false);
      }
    }
  }, [dice, firstClick]);

  React.useEffect(() => {
    setTurnCount((prev) => prev + 1);
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice((prev) =>
      prev.map((die) => {
        return die.isHeld
          ? die
          : {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid(),
            };
      })
    );
  }

  function holdDice(id) {
    setFirstClick(true);
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function refresh() {
    location.reload();
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div>
      {tenzies && <Confetti />}
      <main style={{ position: "relative" }}>
        <Timer firstClick={firstClick} turn={turnCount} />
        <Turns turns={turnCount} />
        <img
          className="tenzi-logo"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkGPOfCPc2nKYrqkIsw3C8trJ2Pw9csIY7PyOddBQNfI7SvNVwSDWuAtpM75qE8-6_VI&usqp=CAU"
          }
        ></img>
        <Popup trigger={<button>INSTRUCTIONS</button>} position="center">
          <div>
            <ol>
              <li>Click "ROLL" until all dice are the same.</li>
              <br />
              <li>Click each "DIE" to freeze them.</li>
              <br />
              <li>Click on middle of the button to avoid a miss.</li>
            </ol>
          </div>
        </Popup>
        <div className="dice-container">{diceElements}</div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button className="big-button" onClick={rollDice}>
            Roll
          </button>
          <button className="big-button" onClick={refresh}>
            RESET
          </button>
        </div>
      </main>
      <Toast turn={turnCount} show={tenzies} />
    </div>
  );
}
