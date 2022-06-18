import React from "react";
import { ImagePlaceHolder } from "../assets";
import { Favorite, LinkButton } from "../components";

const PopularCard = ({ cocktail }) => {
  const { id, drink, image, category } = cocktail;
  return (
    <div className="bg-white mx-3 my-1 h-full w-auto rounded-lg drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white">
      <div className="p-2 relative">
        <img
          className="aspect-[4/3] w-full object-cover rounded-[5px] group-hover:scale-[1.25] group-hover:rotate-6 group-hover:blur-[2px] basic-transition"
          src={image ?? ImagePlaceHolder}
          alt={drink ?? "Cocktail"}
        />
        <div className="flex place-items-center animate-expand cursor-pointer drop-shadow-sm absolute top-4 left-4 rounded-md z-[3] active:scale-[0.90] hover:scale-[1.10] basic-transition">
          <div className="group-hover:scale-125 basic-transition">
          <Favorite id={id} />
          </div>
        </div>
        <div className="absolute overflow-hidden bottom-2 left-2 right-2 bg-app-cadet/70 group-hover:bg-app-cadet/30 h-1/3 w-fill rounded-b-lg group-hover:h-[calc(100%-16px)] group-hover:rounded-lg basic-transition grid items-center">
          <div className="px-1 pb-2">
            <p className="text-[14px] text-center font-app-text text-white truncate leading-5">
              {drink ?? "Classic Cocktail"}
            </p>
            <p className="text-base text-center font-app-heading text-app-olivine truncate leading-5">
              {category ?? "Category"}
            </p>
            <div className="flex justify-center absolute -bottom-20 w-full group-hover:bottom-6 double-transition">
              <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
