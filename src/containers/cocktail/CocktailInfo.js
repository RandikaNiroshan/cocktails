import React, { useEffect, useState } from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import { ImagePlaceHolder } from "../../assets";
import { Favorite, IngredientsList } from "../../components";
import AboutCocktail from "../../components/cocktail/AboutCocktail";

const CocktailInfo = ({ cocktail, loading }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (loading === HTTP_STATUS.FULFILLED) {
      setTags([]);
      cocktail.tags !== null && setTags(cocktail.tags.split(","));
    }
  }, [loading, cocktail.tags]);

  return (
    <section className="px-4 md:px-6 lg:px-20 w-full mt-6 md:mt-8 lg:mt-12 mb-8">
      <div className="flex w-full md:gap-4 lg:gap-10 flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-center items-center w-full md:w-2/3">
          <AboutCocktail cocktail={cocktail} loading={loading} />
          <IngredientsList cocktail={cocktail} loading={loading} />
        </div>

        <div className="flex flex-col justify-center md:justify-start w-full md:w-1/3 mb-6 md:p-0">
          <div className="rounded-lg drop-shadow-xl h-max group ring-1 ring-white">
            {loading === HTTP_STATUS.PENDING && (
              <div className="loading animate-loading rounded-xl w-full aspect-[4/43] md:aspect-square"></div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <img
                className="w-full h-auto rounded-xl object-cover drop-shadow-md md:drop-shadow-lg aspect-[4/3] md:aspect-square"
                src={cocktail.image ?? ImagePlaceHolder}
                alt={cocktail.drink}
              />
            )}
            <Favorite cocktail={cocktail} />
          </div>
          {loading === HTTP_STATUS.FULFILLED && tags.length > 0 && (
            <div className="hidden md:flex flex-wrap gap-2 overflow-hidden mt-8 pr-4">
              {tags.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="rounded-[4px] border border-app-cadet w-max h-min px-[6px] py-[1px] text-[12px] font-app-main text-app-cadet hover:text-white hover:bg-app-cadet cursor-default"
                  >
                    {item.trim()}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CocktailInfo;
