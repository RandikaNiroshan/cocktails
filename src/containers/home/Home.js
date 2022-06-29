import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainCard, OneByThree, TwoByTwo } from "../../components";
import { featuredCocktails } from "../../app/utils/helpers";
import { fetchRandomDrink } from "../../app/features/randomSlice";

const Home = () => {
  const dispatch = useDispatch();
  const randomCocktail = useSelector((state) => state.random.randomCocktail);
  const loading = useSelector((state) => state.random.loading);
  const featuredDrinks = featuredCocktails();

  useEffect(() => {
    dispatch(fetchRandomDrink());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <section className="bg-image w-full">
      <div className="p-4 md:px-8 lg:px-10 md:py-6 lg:py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 justify-center">
        <div className="h-min w-auto col-start-1 row-start-1 row-span-3">
          <OneByThree cocktail={featuredDrinks[0]} loading={loading} />
        </div>
        <div className="h-min w-auto col-start-2 row-start-1 row-span-3">
          <OneByThree cocktail={featuredDrinks[1]} loading={loading} />
        </div>
        <div className="h-min w-auto hidden lg:block lg:col-start-3 lg:row-start-1 lg:row-span-5 lg:col-span-2">
          <MainCard cocktail={randomCocktail} loading={loading} />
        </div>
        <div className="h-min w-auto hidden md:block md:col-start-3 lg:col-start-5 md:row-start-1 md:row-span-2 md:col-span-2">
          <TwoByTwo cocktail={featuredDrinks[5]} loading={loading} />
        </div>
        <div className="h-min w-auto hidden md:block md:col-start-3 lg:col-start-5 md:row-start-3 md:row-span-3">
          <OneByThree cocktail={featuredDrinks[2]} loading={loading} />
        </div>
        <div className="h-min w-auto hidden md:block md:col-start-4 lg:col-start-6 md:row-start-3 md:row-span-3">
          <OneByThree cocktail={featuredDrinks[3]} loading={loading} />
        </div>
        <div className="h-min w-auto col-start-1 row-start-4 row-span-2 col-span-2">
          <TwoByTwo cocktail={featuredDrinks[4]} loading={loading} />
        </div>
        
      </div>
    </section>
  );
};

export default Home;
