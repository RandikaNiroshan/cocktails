import React from "react";
import { ImagePlaceHolder } from "../../assets";
import { Alcoholic, Favorite, LinkButton } from "..";
import { HTTP_STATUS } from "../../app/utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CocktailCard = ({ cocktail, loading, fullData }) => {
  const { id, drink, image, category, alcoholic } = cocktail;
  return (
    <div>
      <div
        className={`bg-white h-full w-full rounded-[8px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white ${
          loading === HTTP_STATUS.FULFILLED && " cocktail-card hover:rotate-0"
        }`}
      >
        <div className="rounded-[8px] overflow-hidden">
          <div className="p-1 md:px-2 md:pt-2 md:pb-[6px] lg:px-3 lg:pt-3 lg:pb-2 relative">
            {loading !== HTTP_STATUS.FULFILLED && (
              <div className="loading animate-loading aspect-[4/5] w-full rounded-[8px]"></div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <>
                <LazyLoadImage
                  className="aspect-[4/5] w-full object-cover rounded-[8px] group-hover:scale-[1.35] group-hover:blur-[3px] group-hover:translate-y-5 basic-transition"
                  src={image ?? ImagePlaceHolder}
                  alt={drink ?? "Cocktail Image"}
                  placeholder={<div className="loading animate-loading aspect-[4/5] w-full rounded-[8px]"></div>}
                />
                {alcoholic && <Alcoholic alcoholic={alcoholic} />}
                <Favorite cocktail={cocktail} />
              </>
            )}
          </div>
          <div className="mx-1 md:mx-2 lg:mx-3 pb-1 md:pb-[6px] lg:pb-2">
            {loading !== HTTP_STATUS.FULFILLED && (
              <div className="flex flex-col justify-start items-start">
                <p className="loading animate-loading rounded-md text-slate-100 h-[24px] lg:h-[28px] w-full mb-1"></p>
                {fullData && (
                  <p className="loading animate-loading rounded-[4px] text-slate-100 h-[16px] w-full mb-2 xl:mb-[10px]"></p>
                )}
              </div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <>
                <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-center font-app-text text-app-flame truncate leading-5">
                  {drink ?? "Classic Cocktail"}
                </p>
                {category && (
                  <p className="text-[13x] md:text-[14px] lg:text-[15px] xl:text-[16px] text-center font-app-heading font-bold text-app-cadet truncate leading-5">
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
                <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-center font-app-text text-white leading-5">
                  {drink ?? "Classic Cocktail"}
                </p>
              </div>
              <div className="flex items-center justify-center px-8 scale-0 group-hover:scale-100 absolute -bottom-80 group-hover:-bottom-[32px] md:group-hover:-bottom-[35px] lg:group-hover:-bottom-[40px] group-hover:delay-[400ms] group-hover:duration-500 duration-150">
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
