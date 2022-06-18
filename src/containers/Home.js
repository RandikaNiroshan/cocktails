import React from "react";
import { useSelector } from "react-redux";
import { Header, MainCard, OneByThree, TwoByTwo } from "../components";
import { FeaturedCocktails } from "../utils/const-data";

const Home = () => {
  const randomCocktail = useSelector((state) => state.cocktail.randomCocktail);
  const loading = useSelector((state) => state.cocktail.loadingRandom);
  const featuredCocktails = FeaturedCocktails;

  const shuffled = featuredCocktails.sort(() => 0.5 - Math.random());
  const featuredDrinks = shuffled.slice(0, 6);
  console.log(featuredDrinks);

  return (
    <section className="bg-black w-full px-10">
      <div className="bg-white rounded-md">
        <div className="px-8">
          <Header />
        </div>
        <div className="p-6 bg-app-cadet">
          <div className="grid grid-cols-6 grid-rows-main-grid-5 gap-3">
            <div className="h-min w-auto col-start-1 row-start-1 row-span-3">
              <OneByThree cocktail={featuredDrinks[0]} />
            </div>
            <div className="h-min w-auto col-start-2 row-start-1 row-span-3">
              <OneByThree cocktail={featuredDrinks[1]} />
            </div>
            <div className="h-min w-auto col-start-3 row-start-1 row-span-5 col-span-2">
              <MainCard cocktail={randomCocktail} loading={loading} />
            </div>
            <div className="h-min w-auto col-start-5 row-start-1 row-span-3">
              <OneByThree cocktail={featuredDrinks[2]} />
            </div>
            <div className="h-min w-auto col-start-6 row-start-1 row-span-3">
              <OneByThree cocktail={featuredDrinks[3]} />
            </div>
            <div className="h-min w-auto col-start-1 row-start-4 row-span-2 col-span-2">
              <TwoByTwo cocktail={featuredDrinks[4]} />
            </div>
            <div className="h-min w-auto col-start-5 row-start-4 row-span-2 col-span-2">
              <TwoByTwo cocktail={featuredDrinks[5]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
