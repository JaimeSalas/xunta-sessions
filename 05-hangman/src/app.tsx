import React from "react";
import { getRandomWord } from './random-word.service';
import { PlaceholderComponent } from './components';

export const App = () => {
  React.useEffect(() => {
    const t = getRandomWord();
    console.log(t);
  }, []);

  return (
    <div>
      <PlaceholderComponent letter="R" show={false} />
    </div>

  );
};

