import React from "react";
import { CocktailQuote, StatsCard } from "../../components";
import { ImgDrinks, ImgIngredients, ImgNonAlcoholic } from "../../assets";

const Stats = () => {
  return (
    <section className="pt-4 md:pt-8 lg:pt-10 py-5 z-[2] overflow-hidden h-min">
      <div className="px-[68px] md:px-[100px] lg:px-[180px] w-full">
        <CocktailQuote />
      </div>
      <div className="mt-14 grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-none sm:gap-[3vw] md:gap-[5vw]">
        <StatsCard
          count="635"
          title="Total Cocktails"
          image={ImgDrinks}
          scrollTo="cocktails"
        />
        <StatsCard
          count="58"
          title="Non Alcoholic"
          image={ImgNonAlcoholic}
          link="/alcoholic?id=1"
        />
        <StatsCard
          count="488"
          title="Ingredients"
          image={ImgIngredients}
          link="/ingredients"
        />
      </div>
    </section>
  );
};

export default Stats;
