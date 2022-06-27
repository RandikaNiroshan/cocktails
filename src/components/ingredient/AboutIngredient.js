import React from "react";
import { useSelector } from "react-redux";
import { HTTP_STATUS } from "../../app/utils/constants";
import PrimaryButton from "../buttons/PrimaryButton";
import IngredientDetailsTile from "./IngredientDetailsTile";

const AboutIngredient = () => {
  const ingredient = useSelector((state) => state.aboutIngredient.ingredient);
  const loading = useSelector((state) => state.aboutIngredient.loading);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-2 capitalize text-app-flame font-extrabold font-app-heading">
        Ingredient Details
      </h1>
      <div className="flex mt-2 w-full justify-center gap-4">
        <div className="p-4 flex-[3] w-full bg-app-cadet/50 rounded-[5px]">
          {loading === HTTP_STATUS.PENDING && (
            <div className="loading animate-loading aspect-[3/4] rounded-[5px]"></div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <>
              <img
                className="aspect-[3/4] w-full object-cover rounded-[5px]"
                src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.name}-Medium.png`}
                alt={ingredient.name}
              />
            </>
          )}
        </div>
        <div className="flex flex-[5] flex-col justify-center items-center w-auto min-w-[200px] rounded-[5px] border-[3px] border-dashed">
          <IngredientDetailsTile
            loading={loading}
            title="Name"
            text={ingredient?.name}
          />
          <IngredientDetailsTile
            loading={loading}
            title="Type"
            text={ingredient?.type === null ? "Not Set" : ingredient?.type}
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
          <div className="my-3 w-full flex justify-center items-center">
            <PrimaryButton
              onClick={() => console.log("View Recipes")}
              text="View Recipes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIngredient;
