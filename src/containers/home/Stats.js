import React from "react";
import { ImGlass, ImMug } from "react-icons/im";
import { FaGlassCheers } from "react-icons/fa";
import { GiWineBottle } from "react-icons/gi";
import { CocktailQuote, StatCard } from "../../components";
import { motion } from "framer-motion";
import {
  fromBelow,
  fromLeft,
  fromRight,
} from "../../app/utils/animationsHelper";
import useWindowSize from "../../hooks/useWindowSize";
import { SCREEN_SIZE } from "../../app/utils/constants";

const Stats = () => {
  const size = useWindowSize();

  return (
    <section className="pt-4 lg:mt-5 xl:mt-7 md:pt-8 lg:pt-10 py-5 z-[2] overflow-hidden h-min">
      <motion.div
        variants={fromBelow}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
          delay: 0.2,
        }}
        className="px-[68px] md:px-[100px] lg:px-[180px] xl:px-[280px] w-full"
      >
        <CocktailQuote />
      </motion.div>

      <motion.div
        layoutId="stats-cards"
        className="mt-14 -mb-6 md:-mb-5 lg:-mb-6 p-4 md:px-6 lg:px-12 xl:px-24 grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-1 lg:gap-4 xl:gap-6 overflow-hidden"
      >
        <motion.div
          key={"total-drinks"}
          variants={fromLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 0.2,
          }}
        >
          <StatCard
            title="Total Drinks"
            count="635"
            icon1={<ImGlass className="w-16 h-16" />}
          />
        </motion.div>
        <motion.div
          key={"non-alcoholic"}
          variants={size.width < SCREEN_SIZE.MD ? fromRight : fromLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 0.4,
          }}
        >
          <StatCard
            title="Non Alcoholic"
            count="58"
            icon1={<ImMug className="w-16 h-16" />}
          />
        </motion.div>
        <motion.div
          key={"categories"}
          variants={size.width < SCREEN_SIZE.MD ? fromLeft : fromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 0.4,
          }}
        >
          <StatCard
            title="Categories"
            count="11"
            icon1={<FaGlassCheers className="w-16 h-16" />}
          />
        </motion.div>
        <motion.div
          key={"ingredients"}
          variants={fromRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 0.2,
          }}
        >
          <StatCard
            title="Ingredients"
            count="488"
            icon1={<GiWineBottle className="w-16 h-16" />}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
