import React from "react";
import {ImagePlaceHolder} from "../../assets/";
import {
  Alcohol,
  NonAlcohol,
  Optional,
  Favorite,
  LinkButton,
} from "../../components";

const OneByThree = (props) => {
  const { id, name, image, category, alcohol } = props.cocktail;
  return (
    <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white">
      <div className="rounded-[5px] overflow-hidden">
        <div className="px-3 pt-3 pb-2 relative">
          <img
            className="aspect-[4/3] w-full object-cover rounded-[5px] group-hover:scale-[1.85] group-hover:blur-[2px] basic-transition"
            src={image ?? ImagePlaceHolder}
            alt={name ?? "Cocktail Image"}
          />
          <div className="w-max group-1 h-5 flex place-items-center cursor-pointer drop-shadow-sm bg-app-cadet absolute top-4 right-4 rounded-md z-[3] active:scale-[0.95] hover:scale-[1.05] basic-transition">
            <div className="w-5 h-5 p-1 group-hover:rotate-[30deg] basic-transition">
              <Alcohol />
            </div>
            <div className="hidden invisible group-hover:block group-hover:visible basic-transition">
              <p className="text-app-cadet text-[0px] group-hover:text-white group-hover:text-[10px] font-app-main text-center tracking-wide pr-2 basic-transition">
                Alcoholic
              </p>
            </div>
          </div>
          <div className="flex place-items-center animate-expand cursor-pointer drop-shadow-sm absolute top-4 left-4 rounded-md z-[3] active:scale-[0.90] hover:scale-[1.10] basic-transition">
            <div className="group-hover:scale-125 basic-transition">
              <Favorite isLiked={false} />
            </div>
          </div>
        </div>
        <div className="px-1 pb-2">
          <p className="text-[14px] text-center font-app-text text-app-flame truncate leading-5">
            {name ?? "Classic Cocktail"}
          </p>
          <p className="text-base text-center font-app-heading font-bold text-app-cadet truncate leading-5">
            {category ?? "Category"}
          </p>
        </div>
      </div>
      <div className="z-[2] pt-5 rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden bg-app-cadet/[0.35] absolute top-0 left-0 right-0 translate-y-full group-hover:translate-y-0 basic-transition duration-500">
        <div className="px-3 pb-2">
          <p className="text-[14px] text-center font-app-text text-white leading-5">
            {name ?? "Classic Cocktail"}
          </p>
          <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
        </div>
      </div>
    </div>
  );
};

export default OneByThree;
