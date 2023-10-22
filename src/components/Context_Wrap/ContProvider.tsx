"use client";
import { ReactNode, createContext } from "react";
import { ThemeContextType, colTs } from "../types";

type Props = { children: ReactNode };

export const ThemeCont = createContext<ThemeContextType>({
  themes: [],
});

const colorArr: colTs[] = [
  {
    btnLabel: "green",
    color: "bg-green-600",
  },
  {
    btnLabel: "blue",
    color: "bg-blue-600",
  },
  {
    btnLabel: "red",
    color: "bg-red-600",
  },
  {
    btnLabel: "pink",
    color: "bg-pink-600",
  },
  {
    btnLabel: "Cyan",
    color: "bg-cyan-600",
  },
  {
    btnLabel: "yellow",
    color: "bg-yellow-600",
  },

  {
    btnLabel: "reset",
    color: "bg-gray-600",
  },
];
export default function ContProvider({ children }: Props) {
  return (
    <ThemeCont.Provider value={{ themes: colorArr }}>
      {children}
    </ThemeCont.Provider>
  );
}
