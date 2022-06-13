import React from "react";
import tempImage from "../../assets/preview.jpg";
import { Alcohol, NonAlcohol, Optional, Favorite } from "../../components";

const TwoByTwo = (props) => {
  const { id, name, image, category, alcohol } = props.cocktail;
  return (
    <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative ring-1 ring-white">
      <div className="rounded-[5px] overflow-hidden">
        <div className="grid grid-cols-two-by-two">
          <div className="p-3 relative">
            <img
              className="aspect-[4/3] w-full object-cover rounded-[5px] group-hover:scale-[2.85] group-hover:blur-[2px] group-hover:translate-x-2/4 basic-transition"
              src={image ?? tempImage}
              alt={name ?? "Cocktail Image"}
            />
            <div className="w-max group-1 h-5 flex place-items-center cursor-pointer drop-shadow-sm bg-app-cadet absolute bottom-4 left-4 rounded-md z-[1] group-hover:z-[3] active:scale-[0.95] hover:scale-[1.05] basic-transition">
              <div className="w-5 h-5 p-1 group-hover:rotate-[30deg] basic-transition">
                <Alcohol />
              </div>
              <div className="hidden invisible group-hover:block group-hover:visible basic-transition">
                <p className="text-app-cadet text-[0px] group-hover:text-white group-hover:text-[10px] font-app-main text-center tracking-wide pr-2 pb-[0.5px] basic-transition">
                  Alcoholic
                </p>
              </div>
            </div>
            <div className="flex place-items-center animate-expand cursor-pointer drop-shadow-sm absolute top-4 left-4 rounded-md z-[1] group-hover:z-[3] active:scale-[0.90] hover:scale-[1.10] basic-transition">
              <div className="group-hover:scale-125 basic-transition">
                <Favorite isLiked={false} />
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className="rounded-[5px] relative">
            <div className="py-3 pr-3 absolute -left-[10px] group-hover:hidden basic-transition">
              <p className="text-[15px] font-app-text font-extrabold text-app-flame leading-5">
                {name ?? "Classic Cocktail Classic Cocktail"}
              </p>
              <p className="text-base font-app-heading text-app-cadet truncate leading-5">
                {category ?? "Category"}
              </p>
              <div className="flex flex-wrap gap-1 overflow-hidden mt-1">
                <div className="rounded-[4px] border border-app-olivine w-min px-1 text-[10px] font-app-main text-app-olivine">
                  Galliano
                </div>
                <div className="rounded-[4px] border border-app-olivine w-min px-1 text-[10px] font-app-main text-app-olivine">
                  Galliano
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-[2] rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden bg-app-cadet/[0.35] absolute top-0 left-0 right-0 translate-x-full group-hover:translate-x-0 basic-transition duration-500">
        <div className="px-3 pb-2">
          <p className="text-[17px] text-center font-app-text font-extrabold text-white tracking-wider leading-5">
            {name ?? "Classic Cocktail"}
          </p>
          <button className="w-max h-max mt-3 mx-2 px-3 py-1 active:scale-[0.95] hover:scale-[1.05] basic-transition rounded-md bg-app-flame text-white text-center text-base font-app-heading tracking-wider drop-shadow-md">
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoByTwo;
