import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import { DummyCocktail } from "../../app/utils/data";
import IngredientWithMeasure from "./IngredientWithMeasure";
import { motion } from "framer-motion";
import { cocktailsGridAnimation, fromLeft } from "../../app/utils/animationsHelper";

const IngredientsList = ({ cocktail, loading }) => {
  return (
    <motion.div
      variants={fromLeft}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 1.2,
      }}
      className="w-full"
    >
      <motion.div
        layoutId="ingredients-list"
        className="grid grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-5 mt-6"
      >
        {loading === HTTP_STATUS.PENDING &&
          [...Array(3)].map((_item, index) => {
            return (
              <div key={index}>
                <IngredientWithMeasure
                  ingredient={DummyCocktail.ingredients[0]}
                  loading={loading}
                />
              </div>
            );
          })}
        {loading === HTTP_STATUS.FULFILLED &&
          cocktail.ingredients.map((item, index) => {
            return (
              <motion.div
                  key={`${item}-${index}`}
                  variants={cocktailsGridAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.09 }}
                >
                  {<IngredientWithMeasure ingredient={item} loading={loading} />}
                </motion.div>
            );
          })}
      </motion.div>
    </motion.div>
  );
};

export default IngredientsList;
