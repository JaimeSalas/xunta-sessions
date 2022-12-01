import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigContainer } from "./config/config.container";
import { GameContainer } from "./game/game.container";
import { MenuComponent } from "./menu/menu.component";
import { GameConfigProvider } from "./providers/game-config/game-config.context";

export const Router: React.FC = () => {
  return (
    <GameConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuComponent />} />
          <Route path="/game" element={<GameContainer />} />
          <Route path="/config" element={<ConfigContainer />} />
        </Routes>
      </BrowserRouter>
    </GameConfigProvider>
  );
};
