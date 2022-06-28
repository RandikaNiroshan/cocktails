import React from "react";
import { ImagePlaceHolder } from "../../assets";
import { Alcoholic, Favorite, LinkButton } from "..";
import { HTTP_STATUS } from "../../app/utils/constants";

const CocktailCard = ({ cocktail, loading, fullData }) => {
  const { id, drink, image, category, alcoholic } = cocktail;
  return (
    <div>
      <div className="bg-white h-full w-full rounded-[8px] drop-shadow-lg group overflow-hidden relative hover:ring-1 cocktail-card hover:rotate-0 hover:ring-white ">
        <div className="rounded-[8px] overflow-hidden">
          <div className="px-3 pt-3 pb-2 relative">
            {loading === HTTP_STATUS.PENDING && (
              <div className="loading animate-loading aspect-[4/5] w-full rounded-[8px]"></div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <>
                <img
                  className="aspect-[4/5] w-full object-cover rounded-[8px] group-hover:scale-[1.35] group-hover:blur-[3px] group-hover:translate-y-5 basic-transition"
                  src={image ?? ImagePlaceHolder}
                  alt={drink ?? "Cocktail Image"}
                />
                {alcoholic && <Alcoholic alcoholic={alcoholic} />}
                <Favorite cocktail={cocktail} />
              </>
            )}
          </div>
          <div className={`px-2 ${fullData ? "pb-2" : "pb-3"}`}>
            {loading === HTTP_STATUS.PENDING && (
              <div className="px-1 space-y-1">
                <p className="loading animate-loading text-[14px] rounded-md text-slate-100 text-center truncate leading-5">
                  ...
                </p>
                {fullData && (
                  <p className="loading animate-loading text-base rounded-md text-slate-100 text-center truncate leading-5">
                    ...
                  </p>
                )}
              </div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <>
                <p className="text-[14px] text-center font-app-text text-app-flame truncate leading-5">
                  {drink ?? "Classic Cocktail"}
                </p>
                {category && (
                  <p className="text-base text-center font-app-heading font-bold text-app-cadet truncate leading-5">
                    {category ?? "Category"}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
        {loading === HTTP_STATUS.FULFILLED && (
          <div className="z-[2] rounded-[8px] h-full w-full flex justify-center items-center overflow-hidden absolute top-0 left-0 right-0">
            <div className="relative w-full flex justify-center items-center">
              <div className="px-3 pb-2 flex flex-col scale-0 group-hover:scale-100 items-center justify-center absolute -bottom-80 group-hover:-bottom-[6px] delay-[150ms] group-hover:duration-500 duration-150">
                <p className="text-[14px] text-center font-app-text text-white leading-5">
                  {drink ?? "Classic Cocktail"}
                </p>
              </div>
              <div className="flex items-center justify-center px-8 scale-0 group-hover:scale-100 absolute -bottom-80 group-hover:-bottom-[40px] group-hover:delay-[400ms] group-hover:duration-500 duration-150">
                <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailCard;
