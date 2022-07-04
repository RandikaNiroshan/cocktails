import React, { useEffect, useState } from "react";
import { DummyCocktail } from "../app/utils/data";
import { HTTP_STATUS, SCREEN_SIZE } from "../app/utils/constants";
import CocktailCard from "./cards/CocktailCard";
import Pagination from "./Pagination";
import { motion, AnimateSharedLayout } from "framer-motion";
import {
  mobileCocktailsGridFromLeft,
  mobileCocktailsGridFromRight,
  otherDeviceCocktailsGrid,
  skeletonGrid,
} from "../app/utils/animationsHelper";
import useWindowSize from "../hooks/useWindowSize";

const CocktailsGrid = ({ list, loading, perPage, fullData }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = perPage ?? 8;
  const itemsVisited = pageNumber * itemsPerPage;
  const displayItems = list.slice(itemsVisited, itemsVisited + itemsPerPage);
  const pageCount = Math.ceil(list.length / itemsPerPage);

  const size = useWindowSize();

  useEffect(() => {
    setPageNumber(0);
  }, [list]);

  return (
    <div>
      {loading === HTTP_STATUS.FULFILLED && list.length === 0 && (
        <div className="w-full p-4">
          <p className="text-app-flame font-app-heading text-[16px] md:text-[18px] lg:text-[20px] font-bold text-center">
            {fullData
              ? "No Cocktails Found For The Selected Letter"
              : "Oops!!. No Cocktails Found"}
          </p>
        </div>
      )}

      {loading === HTTP_STATUS.REJECTED && (
        <div className="w-full p-4">
          <p className="text-app-flame font-app-heading text-[16px] md:text-[18px] lg:text-[20px] font-bold text-center">
            Something Went Wrong. Try Again Later
          </p>
        </div>
      )}

      {loading === HTTP_STATUS.PENDING && (
        <AnimateSharedLayout type="crossfade">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
          >
            {[...Array(itemsPerPage)].map((_item, index) => {
              return (
                <motion.div
                  key={index}
                  variants={
                    skeletonGrid
                  }
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.2}}
                >
                  {<CocktailCard cocktail={DummyCocktail} loading={loading} />}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimateSharedLayout>
      )}

      {loading === HTTP_STATUS.FULFILLED && list.length > 0 && (
        <AnimateSharedLayout type="crossfade">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[12px] md:gap-[20px] lg:gap-8"
          >
            {displayItems.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  variants={
                    size.width < SCREEN_SIZE.MD
                      ? index % 2 === 0
                        ? mobileCocktailsGridFromLeft
                        : mobileCocktailsGridFromRight
                      : otherDeviceCocktailsGrid
                  }
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.09 }}
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
        </AnimateSharedLayout>
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
