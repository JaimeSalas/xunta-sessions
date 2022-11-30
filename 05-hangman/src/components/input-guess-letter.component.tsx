import React from "react";

interface Props {
  onCheck: (letter: string) => void;
}

export const InputGuessLetterComponent: React.FC<Props> = ({ onCheck }) => {
  const [guessLetter, setGuessLetter] = React.useState("");
  
  return (
    <div>
      <input
        maxLength={1}
        type="text"
        value={guessLetter}
        onChange={(e) => setGuessLetter(e.target.value)}
      />
      <button
        disabled={guessLetter === ""}
        onClick={() => {
          onCheck(guessLetter);
          setGuessLetter("");
        }}
      >
        Check
      </button>
    </div>
  );
};
