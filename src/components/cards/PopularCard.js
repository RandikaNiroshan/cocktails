import React from "react";
import { ImagePlaceHolder } from "../../assets";
import { Favorite, LinkButton } from "../";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PopularCard = ({ cocktail }) => {
  const { id, drink, image, category } = cocktail;
  return (
    <div className="bg-white mx-2 lg:mx-3 my-1 h-full w-auto rounded-lg drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white">
      <div className="p-1 md:p-[6px] lg:p-2 relative">
        <LazyLoadImage
          className="aspect-[4/3] w-full object-cover rounded-[5px] group-hover:scale-[1.25] group-hover:rotate-6 group-hover:blur-[2px] basic-transition"
          src={image ?? ImagePlaceHolder}
          alt={drink ?? "Cocktail"}
          placeholder={<div className="loading animate-loading aspect-[4/3 w-full rounded-[5px]"></div>}
        />
        <Favorite cocktail={cocktail} />
        <div className="absolute overflow-hidden bottom-2 left-2 right-2 bg-app-cadet/70 group-hover:bg-app-cadet/30 h-1/3 w-fill rounded-b-lg group-hover:h-[calc(100%-16px)] group-hover:rounded-lg basic-transition grid items-center">
          <div className="px-2 py-2 flex flex-col items-center justify-center">
            <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-center font-app-text text-white truncate leading-5">
              {drink ?? "Classic Cocktail"}
            </p>
            <p className="text-[13x] md:text-[14px] lg:text-[15px] xl:text-[16px]  text-center font-app-heading text-app-olivine truncate leading-5">
              {category ?? "Category"}
            </p>
            <div className="flex mt-1 md:m-2 lg:mt-3 justify-center scale-0 w-full group-hover:scale-100 delay-150 translate-y-32 group-hover:translate-y-0 double-transition">
              <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
