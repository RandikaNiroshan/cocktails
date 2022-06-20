import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import { ImagePlaceHolder } from "../../assets/";
import { Alcoholic, Favorite, LinkButton } from "../../components";

const TwoByTwo = ({ cocktail, loading }) => {
  const { id, drink, image, category, alcoholic, ingredients } = cocktail;
  return (
    <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white">
      <div className="rounded-[5px] overflow-hidden">
        <div className="grid grid-cols-two-by-two">
          <div className="p-2 relative">
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
                <Favorite id={id} />
              </>
            )}
          </div>
          <div className=""></div>
          <div className="rounded-[5px] relative">
            <div
              className={`py-3 absolute -left-[10px] w-full ${
                loading === HTTP_STATUS.FULFILLED
                  ? "group-hover:hidden basic-transition pr-3"
                  : "pr-1"
              }`}
            >
              {loading === HTTP_STATUS.PENDING && (
                <>
                  <p className="loading animate-loading text-slate-100 text-[14px] leading-5 mb-1">
                    ...
                  </p>
                  <p className="loading animate-loading text-slate-100 text-base leading-5 mb-2">
                    ...
                  </p>
                  <div className="loading animate-loading w-full h-10"></div>
                </>
              )}
              {loading === HTTP_STATUS.FULFILLED && (
                <>
                  <p className="text-[14px] font-app-text text-app-flame leading-5">
                    {drink ?? "Cocktail"}
                  </p>
                  <p className="text-base font-app-heading text-app-cadet font-bold truncate leading-5">
                    {category ?? "Category"}
                  </p>
                  <div className="flex flex-wrap gap-1 overflow-hidden mt-1">
                    {ingredients.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="rounded-[4px] border border-app-olivine w-max px-1 text-[10px] font-app-main text-app-olivine"
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
          <div className="z-[2] rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden bg-app-cadet/[0.35] absolute top-0 left-0 right-0 translate-x-full group-hover:translate-x-0 basic-transition duration-500">
            <div className="px-3 pb-2">
              <p className="text-[14px] text-center font-app-text text-white leading-5">
                {drink ?? "Cocktail"}
              </p>
              <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TwoByTwo;
