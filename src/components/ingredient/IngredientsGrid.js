import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { HTTP_STATUS } from "../../app/utils/constants";
import IngredientCard from "./IngredientCard";
import { motion } from "framer-motion";
import { cocktailsGridAnimation } from "../../app/utils/animationsHelper";

const IngredientsGrid = ({ list, loading, perPage, error }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = perPage ?? 8;
  const itemsVisited = pageNumber * itemsPerPage;
  const displayItems = list.slice(itemsVisited, itemsVisited + itemsPerPage);
  const pageCount = Math.ceil(list.length / itemsPerPage);

  useEffect(() => {
    setPageNumber(0);
  }, [list]);

  return (
    <div>
      {loading === HTTP_STATUS.FULFILLED && list.length === 0 && (
        <div className="w-full p-4">
          <p className="text-app-flame font-app-heading text-[16px] md:text-[18px] lg:text-[20px] font-bold text-center">
            Oops!! No Ingredients Found.
          </p>
        </div>
      )}

      {loading === HTTP_STATUS.REJECTED && error !== "Aborted" && (
        <div className="w-full p-4">
          <p className="text-app-flame font-app-heading text-[16px] md:text-[18px] lg:text-[20px] font-bold text-center">
            Oops!! No Ingredients Found.
          </p>
        </div>
      )}

      {(loading === HTTP_STATUS.PENDING ||
        (loading === HTTP_STATUS.REJECTED && error === "Aborted")) && (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {[...Array(itemsPerPage)].map((_item, index) => {
            return (
              <div key={index}>
                {<IngredientCard name="Ingredient" loading={loading} />}
              </div>
            );
          })}
        </div>
      )}

      {loading === HTTP_STATUS.FULFILLED && list.length > 0 && (
        <motion.div
          layoutId="ingredientsGrid"
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5 lg:gap-8"
        >
          {displayItems.map((item, index) => {
            return (
              <motion.div
                key={`${item}-${index}`}
                variants={cocktailsGridAnimation}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.2, delay: index * 0.06 }}
              >
                {<IngredientCard name={item} loading={loading} />}
              </motion.div>
            );
          })}
        </motion.div>
      )}

      <div className="mx-8 my-12">
        {loading === HTTP_STATUS.FULFILLED && list.length > 0 && (
          <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        )}
      </div>
    </div>
  );
};

export default IngredientsGrid;
