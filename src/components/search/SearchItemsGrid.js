import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HTTP_STATUS } from "../../app/utils/constants";
import { Pagination } from "../";
import { DummyCocktail } from "../../app/utils/data";
import SearchCard from "./SearchCard";
import { cocktailsGridAnimation } from "../../app/utils/animationsHelper";

const SearchItemsGrid = ({ list, loading, perPage, error }) => {
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
            No Cocktails Found!
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[25px]">
          {[...Array(itemsPerPage)].map((_item, index) => {
            return (
              <div key={index}>
                {<SearchCard cocktail={DummyCocktail} loading={loading} />}
              </div>
            );
          })}
        </div>
      )}

      {loading === HTTP_STATUS.FULFILLED && list.length > 0 && (
        <motion.div
          layoutId="searchGrid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[16px] lg:gap-[20px] xl:gap-[25px]"
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
                {<SearchCard cocktail={item} loading={loading} />}
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {loading === HTTP_STATUS.FULFILLED && list.length > 0 && (
        <div className="mx-8 mt-6 md:mt-8 mb-1 lg:mt-10">
          <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
        </div>
      )}
    </div>
  );
};

export default SearchItemsGrid;
