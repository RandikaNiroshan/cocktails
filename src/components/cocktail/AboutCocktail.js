import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import PrimaryButton from "../buttons/PrimaryButton";
import InfoCard from "./InfoCard";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fromBelow, fromLeft, fromTop } from "../../app/utils/animationsHelper";

const AboutCocktail = ({ cocktail, loading }) => {
  return (
    <motion.div
      variants={fromLeft}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.1,
      }}
      className="flex flex-col bg-white rounded-xl drop-shadow-lg w-full px-4 lg:px-6 py-4"
    >
      {loading !== HTTP_STATUS.FULFILLED && (
        <>
          <div className="px-1 space-y-1">
            <p className="loading animate-loading text-3xl text-slate-100 text-center truncate leading-5">
              ...
            </p>
            <p className="loading animate-loading text-lg text-slate-100 text-center truncate leading-5">
              ...
            </p>
          </div>
        </>
      )}
      {loading === HTTP_STATUS.FULFILLED && (
        <>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-app-main text-app-flame font-bold">
            {cocktail.drink}
          </h1>
          <p className="text-lg font-app-heading text-app-cadet font-bold">
            {cocktail.alcoholic}
          </p>
        </>
      )}
      <div className="flex justify-evenly gap-2 lg:gap-3 mt-3 h-auto px-1">
        <motion.div
          variants={fromTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.3,
          }}
          className="w-full"
        >
          <InfoCard
            title="Ingredients"
            data={cocktail.ingredients?.length}
            loading={loading}
          />
        </motion.div>
        <motion.div
          variants={fromTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.4,
          }}
          className="w-full"
        >
          <InfoCard
            title="Category"
            data={cocktail.category}
            loading={loading}
          />
        </motion.div>

        <motion.div
          variants={fromTop}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.5,
          }}
          className="w-full"
        >
          <InfoCard title="Serve" data={cocktail.glass} loading={loading} />
        </motion.div>
      </div>
      <motion.div
        variants={fromBelow}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.2,
          delay: 0.5,
        }}
        className="flex justify-center items-start gap-1 w-full mt-5"
      >
        <Link
          to="instructions"
          smooth="easeInCubic"
          offset={-170}
          duration={700}
          delay={150}
        >
          <PrimaryButton text="Instructions" loading={loading} />
        </Link>

        <Link
          to="video-guide"
          smooth="easeInCubic"
          offset={-150}
          duration={700}
          delay={150}
        >
          <PrimaryButton text="Video Guide" loading={loading} />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AboutCocktail;
