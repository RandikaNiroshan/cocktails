import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchByFirstLetter, onLetterClick } from "../app/features/cocktailSlice";
import { Letters } from "../utils/const-data";

const SelectLetter = () => {
  const dispatch = useDispatch();
  const selectedLetter = useSelector((state) => state.cocktail.selectedLetter);
  const LettersList = Letters;

  const onClick = (letter) => {
    dispatch(onLetterClick(letter));
    dispatch(fetchByFirstLetter(letter));
  };

  return (
    <div className="flex justify-center items-center gap-[3px] flex-wrap">
      {LettersList.map((letter, i) => (
        <div key={i} onClick={() => onClick(letter)} className="flex justify-center items-center gap-[3px]">
          <p className={`text-2xl font-app-main font-bold cursor-pointer basic-transition hover:text-[28px] hover:text-app-flame ${selectedLetter === letter ? "text-app-flame" : "text-app-cadet"}`}>
            {letter}
          </p>
          <p className="text-2xl font-app-main font-bold text-app-cadet/50">
            {i < 25 && " /"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SelectLetter;
