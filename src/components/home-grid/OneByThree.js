import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import { ImagePlaceHolder } from "../../assets/";
import { Alcoholic, Favorite, LinkButton } from "../../components";

const OneByThree = ({ cocktail, loading }) => {
  const { id, drink, image, category, alcoholic } = cocktail;
  return (
    <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white z-[2]">
      <div className="rounded-[5px] overflow-hidden">
        <div className="p-2 relative">
          {loading === HTTP_STATUS.PENDING && (
            <div className="loading animate-loading aspect-[4/3] w-full rounded-[5px]"></div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <>
              <img
                className="aspect-[4/3] w-full object-cover rounded-[5px] group-hover:scale-[1.85] group-hover:blur-[2px] basic-transition"
                src={image ?? ImagePlaceHolder}
                alt={drink ?? "Cocktail Image"}
              />
              <Alcoholic alcoholic={alcoholic} />
              <Favorite id={id}cocktail={cocktail} />
            </>
          )}
        </div>
        <div className="px-1 pb-2">
          {loading === HTTP_STATUS.PENDING && (
            <div className="px-1 space-y-1">
              <p className="loading animate-loading rounded-md text-[14px] text-slate-100 text-center truncate leading-5">...</p>
              <p className="loading animate-loading rounded-md text-base text-slate-100 text-center truncate leading-5">...</p>
            </div>
          )}
          {loading === HTTP_STATUS.FULFILLED && (
            <>
              <p className="text-[14px] text-center font-app-text text-app-flame truncate leading-5">
                {drink ?? "Cocktail"}
              </p>
              <p className="text-base text-center font-app-heading font-bold text-app-cadet truncate leading-5">
                {category ?? "Category"}
              </p>
            </>
          )}
        </div>
      </div>
      {loading === HTTP_STATUS.FULFILLED && (
        <div className="z-[2] pt-5 rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden bg-app-cadet/[0.35] absolute top-0 left-0 right-0 translate-y-full group-hover:translate-y-0 basic-transition duration-500">
          <div className="px-3 pb-2 flex flex-col items-center justify-center">
            <p className="text-[14px] text-center font-app-text text-white leading-5">
              {drink ?? "Cocktail"}
            </p>
            <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OneByThree;
