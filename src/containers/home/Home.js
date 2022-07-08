import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainCard, OneByThree, TwoByTwo } from "../../components";
import { featuredCocktails } from "../../app/utils/helpers";
import { fetchRandomDrink } from "../../app/features/randomSlice";
import { motion } from "framer-motion";
import {
  fromBelow,
  fromLeft,
  fromRight,
  fromTop,
} from "../../app/utils/animationsHelper";

const Home = () => {
  const dispatch = useDispatch();
  const randomCocktail = useSelector((state) => state.random.randomCocktail);
  const loading = useSelector((state) => state.random.loading);
  const featuredDrinks = featuredCocktails();

  useEffect(() => {
    const promise = dispatch(fetchRandomDrink());

    return () => {
      promise.abort();
    };
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <section className="bg-image w-full overflow-hidden">
      <motion.div
        layoutId="home-grid"
        className="p-4 md:px-6 lg:px-10 xl:px-16 md:py-6 lg:py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 justify-center"
      >
        <motion.div
          key={"slide 1"}
          variants={fromTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 1 * 0.2,
          }}
          className="h-min w-auto col-start-1 row-start-1 row-span-3"
        >
          <OneByThree cocktail={featuredDrinks[0]} loading={loading} />
        </motion.div>

        <motion.div
          key={"slide 2"}
          variants={fromTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 1.5 * 0.2,
          }}
          className="h-min w-auto col-start-2 row-start-1 row-span-3"
        >
          <OneByThree cocktail={featuredDrinks[1]} loading={loading} />
        </motion.div>

        <motion.div
          key={"slide 3"}
          variants={fromTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 1.8 * 0.2,
          }}
          className="h-min w-auto hidden lg:block lg:col-start-3 lg:row-start-1 lg:row-span-5 lg:col-span-2"
        >
          <MainCard cocktail={randomCocktail} loading={loading} />
        </motion.div>

        <motion.div
          key={"slide 4"}
          variants={fromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 1 * 0.2,
          }}
          className="h-min w-auto hidden md:block md:col-start-3 lg:col-start-5 md:row-start-1 md:row-span-2 md:col-span-2"
        >
          <TwoByTwo cocktail={featuredDrinks[5]} loading={loading} />
        </motion.div>

        <motion.div
          key={"slide 5"}
          variants={fromBelow}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 1.5 * 0.2,
          }}
          className="h-min w-auto hidden md:block md:col-start-3 lg:col-start-5 md:row-start-3 md:row-span-3"
        >
          <OneByThree cocktail={featuredDrinks[2]} loading={loading} />
        </motion.div>

        <motion.div
          key={"slide 6"}
          variants={fromBelow}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 1 * 0.2,
          }}
          className="h-min w-auto hidden md:block md:col-start-4 lg:col-start-6 md:row-start-3 md:row-span-3"
        >
          <OneByThree cocktail={featuredDrinks[3]} loading={loading} />
        </motion.div>
        <motion.div
          key={"slide 7"}
          variants={fromLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 1 * 0.2,
          }}
          className="h-min w-auto col-start-1 row-start-4 row-span-2 col-span-2"
        >
          <TwoByTwo cocktail={featuredDrinks[4]} loading={loading} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
