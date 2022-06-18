import React from "react";
import { ImagePlaceHolder } from "../assets/";
import {
  Alcoholic,
  Favorite,
  LinkButton,
} from "../components";

const CocktailCard = ({ cocktail }) => {
  const { id, drink, image, category, alcoholic } = cocktail;
  return (
    <div>
      <div className="bg-white h-full w-full rounded-[8px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white">
        <div className="rounded-[8px] overflow-hidden">
          <div className="px-3 pt-3 pb-2 relative">
            <img
              className="aspect-[4/5] w-full object-cover rounded-[8px] group-hover:scale-[1.35] group-hover:blur-[2px] group-hover:translate-y-5 basic-transition"
              src={image ?? ImagePlaceHolder}
              alt={drink ?? "Cocktail Image"}
            />
            <Alcoholic alcoholic={alcoholic} />
            <div className="flex place-items-center animate-expand cursor-pointer drop-shadow-sm absolute top-4 left-4 rounded-md z-[3] active:scale-[0.90] hover:scale-[1.10] basic-transition">
              <div className="group-hover:scale-125 basic-transition">
              <Favorite id={id} />
              </div>
            </div>
          </div>
          <div className="px-1 pb-2">
            <p className="text-[14px] text-center font-app-text text-app-flame truncate leading-5">
              {drink ?? "Classic Cocktail"}
            </p>
            <p className="text-base text-center font-app-heading font-bold text-app-cadet truncate leading-5">
              {category ?? "Category"}
            </p>
          </div>
        </div>
        <div className="z-[2] pt-5 rounded-[8px] h-full w-full flex justify-center items-center overflow-hidden bg-app-cadet/[0.35] absolute top-0 left-0 right-0 translate-y-full group-hover:translate-y-0 basic-transition duration-500">
          <div className="px-3 pb-2">
            <p className="text-[14px] text-center font-app-text text-white leading-5">
              {drink ?? "Classic Cocktail"}
            </p>
            <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
