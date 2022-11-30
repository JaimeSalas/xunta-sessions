import React from "react";
import { PlaceholderComponent } from "./placeholder.component";

interface Props {
  word: string;
  guessLetter: string;
  onGuessed?: (guessed: boolean) => void;
}

const stringToArray = (s: string): string[] => [...s];

interface SecretLetter {
  letter: string;
  show: boolean;
}

export const SecretWordComponent: React.FC<Props> = (props: Props) => {
  const { word, guessLetter, onGuessed } = props;

  const [secretWord, setSecretWord] = React.useState<SecretLetter[]>([]);

  React.useEffect(() => {
    setSecretWord(stringToArray(word).map((l) => ({ letter: l, show: false })));
  }, [word]);

  React.useEffect(() => {
    if (guessLetter !== "") {
      const updated = secretWord.map((sl) => {
        if (sl.show) {
          return sl;
        }

        return {
          ...sl,
          show: sl.letter === guessLetter,
        };
      });
      setSecretWord(updated);
    }
  }, [guessLetter]);

  React.useEffect(() => {
    const guessed = secretWord.length > 0 && secretWord.every((v) => v.show);
    if (onGuessed && guessed) {
      onGuessed(guessed);
    }
  }, [secretWord]);

  return (
    <div style={{ display: "flex" }}>
      {secretWord.map(({ letter, show }, i) => (
        <PlaceholderComponent key={i} letter={letter} show={show} />
      ))}
    </div>
  );
};
