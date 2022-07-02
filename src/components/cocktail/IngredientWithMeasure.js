import React from "react";
import { useDispatch } from "react-redux";
import { fetchIngredientDetails } from "../../app/features/aboutIngredientSlice";
import { showIngredientModal } from "../../app/features/modalSlice";
import { HTTP_STATUS } from "../../app/utils/constants";
import PrimaryButton from "../buttons/PrimaryButton";

const IngredientWithMeasure = ({ ingredient, loading }) => {
  const { name, measure } = ingredient;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchIngredientDetails(name));
    dispatch(showIngredientModal());
  };
  return (
    <div className={`bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white cursor-pointer ${loading === HTTP_STATUS.FULFILLED && " ingredient-card"}`}>
      <div className="rounded-[5px] overflow-hidden">
        <div className="p-1 md:p-2 lg:p-3 relative">
          {loading === HTTP_STATUS.PENDING && (
            <div className="loading animate-loading aspect-square w-full rounded-[5px]"></div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <div className="p-2 rounded-[5px] bg-app-cadet/30 group-hover:bg-transparent double-transition">
              <img
                className="aspect-square w-full object-cover rounded-[5px] group-hover:scale-[1.35] group-hover:blur-[3px] group-hover:translate-y-5 basic-transition"
                src={`https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`}
                alt={name}
              />
            </div>
          )}
        </div>
        <div className="pb-1 md:pb-2 lg:pb-3 px-1 md:px-2 lg:px-3">
          {loading === HTTP_STATUS.PENDING && (
            <div className="flex flex-col justify-start items-start">
            <p className="loading animate-loading rounded-md text-slate-100 h-[20px] lg:h-[24px] w-full"></p>
          </div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <div className="px-1 lg:pb-1">
              <p className="text-[10px] md:text-[11px] lg:text-[12px] text-center font-app-main font-bold text-app-flame group-hover:text-transparent basic-transition truncate leading-5">
                {measure}
              </p>
              <p className="text-[12px] md:text-[13px] lg:text-[14px] text-center font-app-text text-app-cadet group-hover:text-transparent basic-transition truncate leading-5">
                {name}
              </p>
            </div>
          )}
        </div>
      </div>
      {loading === HTTP_STATUS.FULFILLED && (
        <div className="z-[2] pt-5 rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden absolute top-0 left-0 right-0">
          <div className="relative w-full flex justify-center items-center">
            <div className="px-2 md:px-3 pb-2 flex flex-col items-center justify-center scale-0 group-hover:scale-100 absolute delay-150 -top-48 group-hover:-top-10 basic-transition group-hover:duration-500 duration-150">
              <p className="text-[12px] md:text-[13px] lg:text-[14px] mb-3 text-center font-app-text text-white leading-5">
                {name}
              </p>
              <PrimaryButton onClick={onClick} text="More Details" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientWithMeasure;
