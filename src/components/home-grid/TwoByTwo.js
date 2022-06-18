import React from "react";
import { ImagePlaceHolder } from "../../assets/";
import { Alcoholic, Favorite, LinkButton } from "../../components";

const TwoByTwo = ({ cocktail, loading }) => {
  const { id, drink, image, category, alcoholic, ingredients } = cocktail;
  return (
    <>
      {loading || (
        <div className="bg-white h-full w-full rounded-[5px] drop-shadow-lg group overflow-hidden relative hover:ring-1 hover:ring-white">
          <div className="rounded-[5px] overflow-hidden">
            <div className="grid grid-cols-two-by-two">
              <div className="p-3 relative">
                <img
                  className="aspect-[4/3] w-full object-cover rounded-[5px] group-hover:scale-[2.85] group-hover:blur-[2px] group-hover:translate-x-2/4 basic-transition"
                  src={image ?? ImagePlaceHolder}
                  alt={drink ?? "Cocktail Image"}
                />
                <Alcoholic alcoholic={alcoholic} alt={true}/>
                <div className="flex place-items-center animate-expand cursor-pointer drop-shadow-sm absolute top-4 left-4 rounded-md z-[3] active:scale-[0.90] hover:scale-[1.10] basic-transition">
                  <div className="group-hover:scale-125 basic-transition">
                    <Favorite id={id} />
                  </div>
                </div>
              </div>
              <div className=""></div>
              <div className="rounded-[5px] relative">
                <div className="py-3 pr-3 absolute -left-[10px] group-hover:hidden basic-transition">
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
                </div>
              </div>
            </div>
          </div>
          <div className="z-[2] rounded-[5px] h-full w-full flex justify-center items-center overflow-hidden bg-app-cadet/[0.35] absolute top-0 left-0 right-0 translate-x-full group-hover:translate-x-0 basic-transition duration-500">
            <div className="px-3 pb-2">
              <p className="text-[14px] text-center font-app-text text-white leading-5">
                {drink ?? "Cocktail"}
              </p>
              <LinkButton link={`/cocktails/${id}`} text="View Recipe" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TwoByTwo;
