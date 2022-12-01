import React from "react";

export interface Context {
  gameCount: number;
  incrementGameCount: () => void;
}

// Creación - Creamos el conetxt para que React lo tenga en su tracking
export const GameRecordsContext = React.createContext<Context>({
  gameCount: 0,
  incrementGameCount: () => {
    console.warn("Not injected on ");
  },
});

// Declaramos esta interfaz para poder anidar nodos
interface Props {
  children: React.ReactNode;
}

// Inicialización - Necesitamos un Provider para inyectar el contexto en el árbol de omponentes
// Utilizamos un usState para gestionar un estado global accesible en caulquier punto de los descendientes deel Provider
export const GameRecordsProvider: React.FC<Props> = ({ children }) => {
  // Donde se almacena
  const [gameCount, setGameCount] = React.useState(0);

  const handleIncrementGameCount = () => {
    const updatedGameCount = gameCount + 1;
    setGameCount(updatedGameCount);
  }

  return (
    <GameRecordsContext.Provider
      value={{
        gameCount,
        incrementGameCount: handleIncrementGameCount,
      }}
    >
      {children}
    </GameRecordsContext.Provider>
  );
};
