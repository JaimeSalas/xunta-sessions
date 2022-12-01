import React from "react";
import { GameRecordsContext } from '../providers/game-records/game-recods.context';

export const ConfigContainer: React.FC = () => {
  const [numberOfTries, setNumberOfTries] = React.useState(5);
  const { gameCount } = React.useContext(GameRecordsContext);

  return (
    <div>
      <label>Set number of tries: </label>
      <input
        type="number"
        value={numberOfTries}
        onChange={(e) => setNumberOfTries(+e.target.value)}
      />
      <div>
        {gameCount}
      </div>
    </div>
  );
};
