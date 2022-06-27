import React from "react";
import {useDispatch } from "react-redux";
import { fetchIngredientDetails } from "../../app/features/aboutIngredientSlice";
import { showIngredientModal } from "../../app/features/modalSlice";
import { HTTP_STATUS } from "../../app/utils/constants";
import PrimaryButton from "../buttons/PrimaryButton";

const IngredientCard = ({ loading, name }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchIngredientDetails(name));
    dispatch(showIngredientModal());
  };
  return (
    <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white cursor-pointer">
      <div className="rounded-[5px] overflow-hidden">
        <div className="p-3 relative">
          {loading === HTTP_STATUS.PENDING && (
            <div className="loading animate-loading aspect-square w-full rounded-[5px]"></div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <div className="p-2 rounded-[5px] bg-app-cadet/30">
              <img
                className="aspect-square w-full object-cover rounded-[5px] group-hover:scale-110 basic-transition group-hover:blur-[2px]"
                src={`https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`}
                alt={name}
              />
            </div>
          )}
        </div>
        <div className="px-2 pb-2">
          {loading === HTTP_STATUS.PENDING && (
            <div className="px-1 space-y-1">
              <p className="loading animate-loading text-[14px] text-slate-100 text-center truncate leading-5">
                ...
              </p>
            </div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <>
              <p className="text-[14px] text-center font-app-text text-app-cadet truncate leading-5">
                {name}
              </p>
            </>
          )}
        </div>
      </div>
      {loading === HTTP_STATUS.FULFILLED && (
        <div className="z-[2] pt-5 rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden bg-app-cadet/[0.35] absolute top-0 left-0 right-0 translate-y-full group-hover:translate-y-0 basic-transition duration-500">
          <div className="px-3 pb-2 flex flex-col items-center justify-center">
            <p className="text-[14px] mb-3 text-center font-app-text text-white leading-5">
            {name}
            </p>
            <PrimaryButton onClick={onClick} text="More Details"/> 
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientCard;
