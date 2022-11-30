import React from "react";
import { getRandomWord } from './random-word.service';

export const App = () => {
  React.useEffect(() => {
    const t = getRandomWord();
    console.log(t);
  }, []);

  return (
    <div>Hello</div>
  );
};

