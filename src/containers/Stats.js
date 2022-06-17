import React from "react";
import { CocktailQuote, StatsCard } from "../components";
import { ImgDrinks, ImgIngredients, ImgNonAlcoholic } from "../assets";

const Stats = () => {
  return (
    <section className="px-10 py-5 sm:px-24 sm:py-10 md:px-32 bg-white z-[2] overflow-hidden">
      <CocktailQuote />
      <div className="mt-14 grid grid-cols-1 grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 sm:gap-[3vw] md:gap-[5vw]">
        <div className="row-start-1 col-start-1 sm:row-start-1 sm:col-start-1">
          <StatsCard count="635" title="Total Cocktails" image={ImgDrinks} />
        </div>
        <div className="row-start-2 col-start-1 sm:row-start-1 sm:col-start-2">
          <StatsCard count="58" title="Non Alcoholic" image={ImgNonAlcoholic} />
        </div>
        <div className="row-start-3 col-start-1 sm:row-start-1 sm:col-start-3">
          <StatsCard count="488" title="Ingredients" image={ImgIngredients} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
