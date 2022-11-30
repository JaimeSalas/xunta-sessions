import React from "react";

export const ConfigContainer: React.FC = () => {
  const [numberOfTries, setNumberOfTries] = React.useState(5);
  return (
    <div>
      <label>Set number of tries: </label>
      <input
        type="number"
        value={numberOfTries}
        onChange={(e) => setNumberOfTries(+e.target.value)}
      />
    </div>
  );
};
