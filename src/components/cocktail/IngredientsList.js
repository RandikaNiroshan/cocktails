import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";
import { DummyCocktail } from "../../app/utils/data";
import IngredientWithMeasure from "./IngredientWithMeasure";

const IngredientsList = ({ cocktail, loading }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-5 mt-6">
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
              <div key={index}>
                <IngredientWithMeasure ingredient={item} loading={loading} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default IngredientsList;
