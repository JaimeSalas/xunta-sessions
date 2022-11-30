import React from "react";
import { getRandomWord } from "./random-word.service";
import {
  SecretWordComponent,
  InputGuessLetterComponent,
} from "./components";

export const GameContainer = () => {
  const [guessCount, setGuessCount] = React.useState(0);
  const [word, setWord] = React.useState("");
  const [guessLetter, setGuessLetter] = React.useState("");

  React.useEffect(() => {
    const t = getRandomWord();
    console.log(t);
    setWord(t);
  }, []);

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
    </div>
  );
};
