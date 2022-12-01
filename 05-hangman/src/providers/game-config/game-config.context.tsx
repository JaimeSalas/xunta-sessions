import React from "react";

export interface Context {
  maxNumberOfTries: number;
  setMaxNumberOfTries: (value: number) => void;
}

// Creación - Creamos el conetxt para que React lo tenga en su tracking
export const GameConfigContext = React.createContext<Context>({
  maxNumberOfTries: 0,
  setMaxNumberOfTries: () => {
    console.warn("Not injected on ");
  },
});

// Declaramos esta interfaz para poder anidar nodos
interface Props {
  children: React.ReactNode;
}

// Inicialización - Necesitamos un Provider para inyectar el contexto en el árbol de omponentes
// Utilizamos un usState para gestionar un estado global accesible en caulquier punto de los descendientes deel Provider
export const GameConfigProvider: React.FC<Props> = ({ children }) => {
  // Donde se almacena
  const [maxNumberOfTries, setMaxNumberOfTries] = React.useState(5);

  return (
    <GameConfigContext.Provider
      value={{
        maxNumberOfTries,
        setMaxNumberOfTries,
      }}
    >
      {children}
    </GameConfigContext.Provider>
  );
};
