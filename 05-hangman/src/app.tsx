import React from "react";
import { GameContainer } from "./game/game.container";
import { ConfigContainer } from "./config/config.container";

export const App = () => {
  return (
    <>
      <GameContainer />
      <ConfigContainer />
    </>
  );
};
