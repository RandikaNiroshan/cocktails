import React from "react";
import { ImagePlaceHolder } from "../../assets/";
import { Alcoholic, Favorite, LinkButton } from "../../components";

const MainCard = ({ cocktail, loading }) => {
  const { id, drink, image, category, alcoholic, ingredients } = cocktail;
  return (
    <>
      {loading || (
        <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white">
          <div className="rounded-[5px] overflow-hidden">
            <div className="px-3 pt-3 pb-2 relative">
              <img
                className="aspect-[4/3] w-full object-cover rounded-[5px] group-hover:scale-[1.85] group-hover:blur-[2px] basic-transition"
                src={image ?? ImagePlaceHolder}
                alt={drink ?? "Cocktail Image"}
              />
              <Alcoholic alcoholic={alcoholic} />
              <div className="flex place-items-center animate-expand cursor-pointer drop-shadow-sm absolute top-4 left-4 rounded-md z-[3] active:scale-[0.95] hover:scale-[1.05] basic-transition">
                <div className="group-hover:scale-125 basic-transition">
                  <Favorite id={id} />
                </div>
              </div>
            </div>
            <div className="px-1 pb-4">
              <p className="text-[14px] text-center font-app-text text-app-flame truncate leading-5">
                {drink ?? "Cocktail"}
              </p>
              <p className="text-base text-center font-app-heading font-bold text-app-cadet truncate leading-5">
                {category ?? "Category"}
              </p>
            </div>
          </div>
          <div className="z-[2] rounded-[5px] h-full w-full flex flex-col justify-center items-center overflow-hidden bg-app-cadet/[0.35] absolute top-0 left-0 right-0 -translate-y-full group-hover:translate-y-0 basic-transition duration-500">
            <div className="px-3 pb-1 flex flex-col items-center justify-center">
              <p className="text-[15px] text-center font-app-text text-white tracking-wider leading-5">
                {drink ?? "Cocktail"}
              </p>
              <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
              <p className="mt-4 text-sm text-center font-app-heading text-white truncate leading-5">
                Ingredients:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-[5px] overflow-hidden px-8">
              {ingredients.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="rounded-[4px] border border-app-olivine w-max px-1 text-[12px] font-app-main text-app-olivine basic-transition hover:text-white hover:border-white cursor-pointer"
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainCard;
