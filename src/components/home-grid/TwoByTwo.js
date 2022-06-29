import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import { ImagePlaceHolder } from "../../assets/";
import { Alcoholic, Favorite, LinkButton } from "../../components";

const TwoByTwo = ({ cocktail, loading }) => {
  const { id, drink, image, category, alcoholic, ingredients } = cocktail;
  return (
    <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white cursor-default from-right">
      <div className="rounded-[5px] overflow-hidden">
        <div className="grid grid-cols-two-by-two">
          <div className="p-[5px] md:p-2 relative">
            {loading === HTTP_STATUS.PENDING && (
              <div className="loading animate-loading aspect-[4/3] w-full rounded-[5px]"></div>
            )}
            {loading === HTTP_STATUS.FULFILLED && (
              <>
                <img
                  className="aspect-[4/3] w-full object-cover rounded-[5px] group-hover:scale-[2.85] group-hover:blur-[2px] group-hover:translate-x-2/4 basic-transition"
                  src={image ?? ImagePlaceHolder}
                  alt={drink ?? "Cocktail Image"}
                />
                <Alcoholic alcoholic={alcoholic} alt={true} />
                <Favorite cocktail={cocktail} />
              </>
            )}
          </div>
          <div className=""></div>
          <div className="rounded-[5px] relative">
            <div
              className={`py-3 absolute -left-[10px] w-full ${
                loading === HTTP_STATUS.FULFILLED
                  ? "group-hover:hidden basic-transition pr-2 pl-1 md:pl-0"
                  : "pr-1"
              }`}
            >
              {loading === HTTP_STATUS.PENDING && (
                <>
                  <p className="loading animate-loading rounded-md text-slate-100 text-[14px] leading-5 mb-1">
                    ...
                  </p>
                  <p className="loading animate-loading rounded-md text-slate-100 text-base leading-5 mb-2">
                    ...
                  </p>
                  <div className="loading animate-loading rounded-md w-full h-10"></div>
                </>
              )}
              {loading === HTTP_STATUS.FULFILLED && (
                <>
                  <p className="text-[10px] md:text-[12px] lg:text-[14px] font-app-text text-app-flame leading-5">
                    {drink ?? "Cocktail"}
                  </p>
                  <p className="text-[12px] md:text-[13px] lg:text-[15px] font-app-heading text-app-cadet font-bold truncate leading-5">
                    {category ?? "Category"}
                  </p>
                  <div className="flex flex-wrap gap-1 overflow-hidden mt-2">
                    {ingredients.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="rounded-[4px] border border-app-olivine w-max px-1 text-[8px] md:text-[9px] lg:text-[10px] font-app-main text-app-olivine"
                        >
                          {item.name}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {loading === HTTP_STATUS.FULFILLED && (
        <>
          <div className="z-[2] rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden absolute top-0 left-0 right-0">
          <div className="relative w-full flex justify-center items-center">
            <div className="px-3 pb-2 flex flex-col items-center justify-center scale-0 group-hover:scale-100 absolute -bottom-48 group-hover:bottom-0 group-hover:delay-[150ms] group-hover:duration-500 duration-150">
              <p className="text-[14px] text-center font-app-text text-white leading-5">
                {drink ?? "Cocktail"}
              </p>
            </div>
            <div className="flex items-center justify-center px-8 scale-0 group-hover:scale-100 absolute -bottom-48 group-hover:-bottom-[30px] group-hover:delay-[450ms] group-hover:duration-500 duration-150">
              <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
            </div>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TwoByTwo;
