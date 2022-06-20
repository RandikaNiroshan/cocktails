import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainCard, OneByThree, TwoByTwo } from "../../components";
import { featuredCocktails } from "../../app/utils/helpers";
import { fetchRandomDrink } from "../../app/features/randomSlice";

const Home = () => {
  const dispatch = useDispatch();
  const randomCocktail = useSelector(
    (state) => state.randomDrink.randomCocktail
  );
  const loading = useSelector((state) => state.randomDrink.loading);
  const featuredDrinks = featuredCocktails();

  useEffect(() => {
    dispatch(fetchRandomDrink());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <section className="bg-image w-full px-10">
      <div className="rounded-md">
        <div className="px-6 py-8">
          <div className="grid grid-cols-6 grid-rows-main-grid-5 gap-3">
            <div className="h-min w-auto col-start-1 row-start-1 row-span-3">
              <OneByThree cocktail={featuredDrinks[0]} loading={loading} />
            </div>
            <div className="h-min w-auto col-start-2 row-start-1 row-span-3">
              <OneByThree cocktail={featuredDrinks[1]} loading={loading} />
            </div>
            <div className="h-min w-auto col-start-3 row-start-1 row-span-5 col-span-2">
              <MainCard cocktail={randomCocktail} loading={loading} />
            </div>
            <div className="h-min w-auto col-start-5 row-start-1 row-span-3">
              <OneByThree cocktail={featuredDrinks[2]} loading={loading} />
            </div>
            <div className="h-min w-auto col-start-6 row-start-1 row-span-3">
              <OneByThree cocktail={featuredDrinks[3]} loading={loading} />
            </div>
            <div className="h-min w-auto col-start-1 row-start-4 row-span-2 col-span-2">
              <TwoByTwo cocktail={featuredDrinks[4]} loading={loading} />
            </div>
            <div className="h-min w-auto col-start-5 row-start-4 row-span-2 col-span-2">
              <TwoByTwo cocktail={featuredDrinks[5]} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
