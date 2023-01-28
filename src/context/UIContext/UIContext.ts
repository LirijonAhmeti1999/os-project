import { createContext, useContext } from "react";

export interface UIContextValues {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const UIContext = createContext<UIContextValues>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useUIContext = () => {
  if (!UIContext) {
    throw new Error("useUIContext must be used within UIContext");
  }

  return useContext(UIContext);
};
