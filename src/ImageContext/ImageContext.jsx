import React, { createContext, useReducer, useMemo, useContext } from "react";

import { reducer, initialState } from "./reducer";

const ImageContext = createContext();

export const ImageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ImageContext.Provider value={{ state, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error(
      "useImageContext must be used within an ImageContext component"
    );
  }
  return context;
};
