import React from "react";
import { PlaceholderComponent } from "./placeholder.component";

interface Props {
  word: string;
}

const stringToArray = (s: string): string[] => [...s];

export const SecretWordComponent: React.FC<Props> = (props: Props) => {
  // 'hola' -> ['h', 'o',....]
  const { word } = props;
  return (
    <div style={{ display: 'flex' }}>
      {stringToArray(word).map((l) => (
        <PlaceholderComponent letter={l} show={false} />
      ))}
    </div>
  );
};
