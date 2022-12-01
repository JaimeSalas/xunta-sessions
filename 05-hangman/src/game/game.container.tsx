import React from "react";
import { getRandomWord } from "./random-word.service";
import { SecretWordComponent, InputGuessLetterComponent } from "./components";
import { GameConfigContext } from "../providers/game-config/game-config.context";

export const GameContainer = () => {
  const [guessCount, setGuessCount] = React.useState(0); // React - API
  const [word, setWord] = React.useState("");
  const [guessLetter, setGuessLetter] = React.useState("");
  const { maxNumberOfTries } = React.useContext(GameConfigContext);

  const gameOver = () => guessCount > maxNumberOfTries;

  // console.log(maxNumberOfTries);

  // -> JS, CSS
  // Dark Mode, Light Mode -> AJAX -> CSS Dark // CSS Light
  // HTML5 -> CSS
  const assignWord = function () {
    const [t] = getRandomWord();
    console.log(t);
    setWord(t);
  };

  React.useEffect(() => {
    assignWord();
  }, []);

  React.useEffect(() => {
    if (gameOver()) {
      alert("Game Over!!");
    }
  }, [guessCount]);

  const onReset = function () {
    assignWord();
    setGuessCount(0);
    setGuessLetter("");
  };

  return (
    <div>
      <SecretWordComponent
        word={word}
        guessLetter={guessLetter}
        onGuessed={(val) => {
          console.log("gueeeeessssed!!", val);
        }}
      />
      <InputGuessLetterComponent
        onCheck={(val) => {
          console.log(val);
          if (!word.includes(val)) {
            const updated = guessCount + 1;
            setGuessCount(updated);
          }
          setGuessLetter(val);
        }}
      />
      <div>
        <span>{guessCount}</span>
      </div>
      {/* <button
        onClick={() => {
          assignWord();
          setGuessCount(0);
          setGuessLetter("");
        }}
      >
        Reset
      </button> */}
      <button
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};
