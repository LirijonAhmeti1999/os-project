import React, { useState } from "react";
import { UIContext, UIContextValues } from "./UIContext";

interface Props {
  children: React.ReactNode;
}

export const UIContextProvider = (props: Props) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") == "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => {
      localStorage.setItem("theme", darkMode ? "light" : "dark");

      return !darkMode;
    });
  };

  const context: UIContextValues = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <UIContext.Provider value={context}>{props.children}</UIContext.Provider>
  );
};
