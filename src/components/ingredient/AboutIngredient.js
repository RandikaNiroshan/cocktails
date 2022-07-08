import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideIngredientModal } from "../../app/features/modalSlice";
import { HTTP_STATUS } from "../../app/utils/constants";
import PrimaryButton from "../buttons/PrimaryButton";
import IngredientDetailsTile from "./IngredientDetailsTile";

const AboutIngredient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ingredient = useSelector((state) => state.aboutIngredient.ingredient);
  const loading = useSelector((state) => state.aboutIngredient.loading);

  const onClickHandler = () => {
    dispatch(hideIngredientModal());
    navigate(`/ingredients/${ingredient?.name}`)
  }

  return (
    <div className="flex flex-col justify-center items-center cursor-default">
      <h1 className="text-xl md:text-2xl lg:text-3xl my-2 capitalize text-app-flame font-extrabold font-app-heading">
        Ingredient Details
      </h1>
      <div className="grid grid-rows-9 grid-cols-1 md:grid-cols-9 md:grid-rows-1 mt-2 justify-center gap-2 md:gap-4">
        <div className="col-start-1 row-start-1 row-span-4 md:row-span-1 md:col-start-1 md:col-span-4 overflow-hidden">
          <div className="p-[6px] min-h-[150px] md:p-2 h-max md:h-full w-auto bg-app-cadet/50 rounded-[5px] flex justify-center items-center">
            {loading === HTTP_STATUS.FULFILLED && (
              <LazyLoadImage
                className="aspect-square w-full object-cover rounded-[5px] max-w-[75vw] md:max-w-[200px] scale-90 md:scale-110"
                src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.name}-Medium.png`}
                alt={ingredient.name}
                placeholder={<div className="loading animate-loading aspect-square w-full rounded-[5px] max-w-[75vw] md:max-w-[200px]"></div>}
              />
            )}
          </div>
        </div>
        <div className="col-start-1 row-start-5 row-span-5 md:row-span-1 md:col-start-5 md:col-span-5 md:row-start-1 flex py-2 px-6 md:px-3 flex-col justify-center items-center w-auto min-w-[200px] rounded-[5px] border-[3px] border-dashed">
          <IngredientDetailsTile
            loading={loading}
            title="Name"
            text={ingredient?.name}
          />
          <IngredientDetailsTile
            loading={loading}
            title="Type"
            text={ingredient?.type === null ? "-" : ingredient?.type}
          />
          <IngredientDetailsTile
            loading={loading}
            title="Alcoholic"
            text={ingredient?.alcohol === "Yes" ? "Yes" : "No"}
          />
          <IngredientDetailsTile
            loading={loading}
            title="Alcohol By Volume"
            text={ingredient?.abv === null ? "-" : `${ingredient?.abv} %`}
          />
          <div className="my-2 w-full flex justify-center items-center">
            <PrimaryButton
              onClick={onClickHandler}
              text="View Recipes"
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIngredient;
