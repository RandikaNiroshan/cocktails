import React, { useEffect, useState } from "react";
import { DummyCocktail } from "../app/utils/data";
import { HTTP_STATUS } from "../app/utils/constants";
import CocktailCard from "./cards/CocktailCard";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import {
  cocktailsGridAnimation,
} from "../app/utils/animationsHelper";

const CocktailsGrid = ({ list, loading, perPage, error, fullData }) => {
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
            {fullData
              ? "No Cocktails Found For The Selected Letter."
              : "Oops!! No Cocktails Found."}
          </p>
        </div>
      )}

      {loading === HTTP_STATUS.REJECTED && error !== "Aborted" && (
        <div className="w-full p-4">
          <p className="text-app-flame font-app-heading text-[16px] md:text-[18px] lg:text-[20px] font-bold text-center">
            Oops!! No Cocktails Found.
          </p>
        </div>
      )}

      {(loading === HTTP_STATUS.PENDING ||
        (loading === HTTP_STATUS.REJECTED && error === "Aborted")) && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {[...Array(itemsPerPage)].map((_item, index) => {
            return (
              <div key={index}>
                {<CocktailCard cocktail={DummyCocktail} loading={loading} />}
              </div>
            );
          })}
        </div>
      )}

      {loading === HTTP_STATUS.FULFILLED && list.length > 0 && (
        <motion.div
          layoutId="cocktailsGrid"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[12px] md:gap-[20px] lg:gap-8"
        >
          {displayItems.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                variants={cocktailsGridAnimation}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.2, delay: index * 0.06 }}
              >
                {
                  <CocktailCard
                    cocktail={item}
                    loading={loading}
                    fullData={fullData}
                  />
                }
              </motion.div>
            );
          })}
        </motion.div>
      )}

      <div className="mx-8 mb-10 mt-8 md:mb-12 lg:mt-10">
        {loading === HTTP_STATUS.FULFILLED && list.length > 0 && (
          <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        )}
      </div>
    </div>
  );
};

export default CocktailsGrid;
