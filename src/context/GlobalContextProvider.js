"use client";

import { createContext, useState } from "react";

export const Context = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [background, setBackground] = useState("transparent");

  const toggle = () => {
    setBackground((prev) =>
      prev === "transparent" ? "lightblue" : "transparent"
    );
  };

  const query = "";

  return (
    <Context.Provider value={{ toggle, background }}>
      <div>{children}</div>
    </Context.Provider>
  );
};
