import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import { ImagePlaceHolder } from "../../assets";
import { Favorite, IngredientsList } from "../../components";
import AboutCocktail from "../../components/cocktail/AboutCocktail";

const CocktailInfo = ({ cocktail, loading }) => {
  return (
    <section className="px-20 mt-12 w-full mb-8">
      <div className="flex w-full gap-10">
        <div className="flex flex-col justify-center items-center w-2/3">
          <AboutCocktail cocktail={cocktail} loading={loading} />
          <IngredientsList cocktail={cocktail} loading={loading} />
        </div>

        <div className="rounded-lg drop-shadow-xl h-max w-1/3 group ring-1 ring-white">
          {loading === HTTP_STATUS.PENDING && (
            <div className="loading animate-loading rounded-xl w-full aspect-square"></div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <img
              className="w-full h-auto rounded-xl drop-shadow-lg aspect-square"
              src={cocktail.image ?? ImagePlaceHolder}
              alt={cocktail.drink}
            />
          )}
          <Favorite />
        </div>
      </div>
    </section>
  );
};

export default CocktailInfo;
