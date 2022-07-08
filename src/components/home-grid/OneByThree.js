import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HTTP_STATUS } from "../../app/utils/constants";
import { ImagePlaceHolder } from "../../assets/";
import { Alcoholic, Favorite, LinkButton } from "../../components";

const OneByThree = ({ cocktail, loading }) => {
  const { id, drink, image, category, alcoholic } = cocktail;
  return (
    <div
      className={`bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white cursor-default ${
        loading === HTTP_STATUS.FULFILLED && " from-bottom"
      }`}
    >
      <div className="rounded-[5px] overflow-hidden">
        <div className="p-[6px] md:p-2 xl:p-[10px] relative">
          {loading !== HTTP_STATUS.FULFILLED && (
            <div className="loading animate-loading aspect-[4/3] w-full rounded-[5px]"></div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <>
              <LazyLoadImage
                placeholder={<div className="loading animate-loading aspect-[4/3] w-full rounded-[5px]"></div>}
                className="aspect-[4/3] w-full object-cover rounded-[5px] group-hover:scale-[1.85] group-hover:translate-y-4 group-hover:blur-[2px] basic-transition"
                src={image ?? ImagePlaceHolder}
                alt={drink ?? "Cocktail Image"}
              />
              <Alcoholic alcoholic={alcoholic} />
              <Favorite id={id} cocktail={cocktail} />
            </>
          )}
        </div>
        <div className="px-1">
          {loading !== HTTP_STATUS.FULFILLED && (
            <div className="flex flex-col justify-start items-start mx-1">
              <p className="loading animate-loading rounded-md text-slate-100 h-[20px] w-full mb-1"></p>
              <p className="loading animate-loading rounded-[5px] text-slate-100 h-[16px] w-full mb-2 xl:mb-[10px]"></p>
            </div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <div className="pb-1">
              <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-center font-app-text text-app-flame truncate leading-5">
                {drink ?? "Cocktail"}
              </p>
              <p className="text-[13x] md:text-[14px] lg:text-[15px] xl:text-[16px] text-center font-app-heading font-bold text-app-cadet truncate leading-5">
                {category ?? "Category"}
              </p>
            </div>
          )}
        </div>
      </div>
      {loading === HTTP_STATUS.FULFILLED && (
        <div className="z-[2] pt-5 rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden absolute top-0 left-0 right-0">
          <div className="relative w-full flex justify-center items-center">
            <div className="px-3 pb-2 flex flex-col items-center justify-center scale-0 group-hover:scale-100 absolute -bottom-48 group-hover:bottom-1 lg:group-hover:bottom-2 group-hover:delay-[150ms] group-hover:duration-500 duration-150">
              <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-center font-app-text text-white leading-5">
                {drink ?? "Cocktail"}
              </p>
            </div>
            <div className="flex items-center justify-center px-8 scale-0 group-hover:scale-100 absolute -bottom-48 group-hover:-bottom-[20px] lg:group-hover:-bottom-[24px] group-hover:delay-[450ms] group-hover:duration-500 duration-150">
              <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneByThree;
