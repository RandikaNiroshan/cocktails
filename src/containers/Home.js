import React from "react";
import { Header, MainCard, OneByThree, TwoByTwo } from "../components";

const Home = () => {
  return (
    <section className="bg-black w-full px-10">
      <div className="bg-white rounded-md">
        <div className="px-8">
          <Header />
        </div>
        <div className="p-6 bg-app-cadet">
          <div className="grid grid-cols-6 grid-rows-main-grid-5 gap-3">
            <div className="h-min w-auto col-start-1 row-start-1 row-span-3">
              <OneByThree cocktail="" />
            </div>
            <div className="h-min w-auto col-start-2 row-start-1 row-span-3">
              <OneByThree cocktail="" />
            </div>
            <div className="h-min w-auto col-start-3 row-start-1 row-span-5 col-span-2">
              <MainCard cocktail="" />
            </div>
            <div className="h-min w-auto col-start-5 row-start-1 row-span-3">
              <OneByThree cocktail="" />
            </div>
            <div className="h-min w-auto col-start-6 row-start-1 row-span-3">
              <OneByThree cocktail="" />
            </div>
            <div className="h-min w-auto col-start-1 row-start-4 row-span-2 col-span-2">
              <TwoByTwo cocktail="" />
            </div>
            <div className="w-auto col-start-5 row-start-4 row-span-2 col-span-2">
              <TwoByTwo cocktail="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
