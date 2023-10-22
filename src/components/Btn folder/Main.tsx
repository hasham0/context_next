"use client";
import React, { useContext, useState } from "react";
import Button from "./Button";
import { ThemeCont } from "../Context_Wrap/ContProvider";
import { colTs } from "../types";

type Props = {};

export default function Main({}: Props) {
  const btnCont = useContext(ThemeCont);
  const [bgColor, setBgCol] = useState(
    btnCont.themes[btnCont.themes.length - 1].color
  );
  return (
    <div>
      <div
        className={`max-w-screen h-screen flex items-center justify-center ${bgColor}`}
      >
        <div className="flex gap-5 p-2 bg-white/80 rounded-2xl border-2 border-black">
          {btnCont.themes.map((item: colTs) => {
            return (
              <Button
                btnCol={item.color}
                btnLabel={item.btnLabel}
                btnFunc={() => setBgCol(item.color)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
