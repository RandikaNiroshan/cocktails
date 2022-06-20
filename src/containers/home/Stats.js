import React from "react";
import { CocktailQuote, StatsCard } from "../../components";
import { ImgDrinks, ImgIngredients, ImgNonAlcoholic } from "../../assets";

const Stats = () => {
  return (
    <section className="px-10 pt-10 py-5 sm:px-24 md:px-32 z-[2] overflow-hidden h-min">
      <CocktailQuote />
      <div className="mt-14 grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-none sm:gap-[3vw] md:gap-[5vw]">
        <StatsCard count="635" title="Total Cocktails" image={ImgDrinks} />
        <StatsCard count="58" title="Non Alcoholic" image={ImgNonAlcoholic} />
        <StatsCard count="488" title="Ingredients" image={ImgIngredients} />
      </div>
    </section>
  );
};

export default Stats;
