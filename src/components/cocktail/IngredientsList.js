import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import IngredientWithMeasure from "./IngredientWithMeasure";
import { motion } from "framer-motion";
import { cocktailsGridAnimation } from "../../app/utils/animationsHelper";

const IngredientsList = ({ cocktail, loading }) => {
  return (
    <>
      <motion.div
        layoutId="ingredientsList"
        className="grid grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-5 mt-4 md:mt-6 mb-3"
      >
        {loading === HTTP_STATUS.FULFILLED &&
          cocktail.ingredients.map((item, index) => {
            return (
              <motion.div
                key={`${item}-${index}`}
                variants={cocktailsGridAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.07 }}
              >
                {<IngredientWithMeasure ingredient={item} loading={loading} />}
              </motion.div>
            );
          })}
      </motion.div>
    </>
  );
};

export default IngredientsList;
