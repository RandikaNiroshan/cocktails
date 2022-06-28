import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import { ImagePlaceHolder } from "../../assets/";
import { Alcoholic, Favorite, LinkButton } from "../../components";

const MainCard = ({ cocktail, loading }) => {
  const { id, drink, image, category, alcoholic, ingredients } = cocktail;
  return (
    <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white cursor-default from-bottom">
      <div className="rounded-[5px] overflow-hidden">
        <div className="p-[10px] relative">
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
              <Favorite cocktail={cocktail} />
            </>
          )}
        </div>
        <div className="px-1 pb-[15px] xl:pb-[28px]">
          {loading === HTTP_STATUS.PENDING && (
            <div className="px-2 space-y-1">
              <p className="loading animate-loading rounded-md text-[14px] text-slate-100 text-center truncate leading-5">
                ...
              </p>
              <p className="loading animate-loading rounded-md text-base text-slate-100 text-center truncate leading-5">
                ...
              </p>
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
        <>
          <div className="z-[2] rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden absolute top-0 left-0 right-0">
            <div className="relative w-full flex justify-center items-center">
              <div className="px-3 pb-1 flex flex-col items-center justify-center scale-0 group-hover:scale-100 absolute -bottom-48 group-hover:-bottom-2 group-hover:delay-[250ms] group-hover:duration-500 duration-150">
                <p className="text-[15px] text-center font-app-text text-white tracking-wider leading-5">
                  {drink ?? "Cocktail"}
                </p>
                <p className="mt-2 lg:mb-1 text-sm text-center font-app-heading text-white truncate leading-5">
                  Ingredients:
                </p>
                <div className="flex flex-wrap justify-center gap-[5px] overflow-hidden ">
                  {ingredients.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="rounded-[4px] border border-app-olivine w-max px-1 text-[12px] font-app-main text-app-olivine"
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-center px-8 scale-0 group-hover:scale-100 absolute -bottom-48 group-hover:-bottom-[54px] group-hover:delay-[500ms] group-hover:duration-500 duration-150">
                <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainCard;
