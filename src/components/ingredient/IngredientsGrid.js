import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { HTTP_STATUS } from "../../app/utils/constants";
import IngredientCard from "./IngredientCard";

const IngredientsGrid = ({ list, loading, perPage }) => {
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
          <p className="text-app-flame font-app-heading text-xl font-bold text-center">
            "Oops!!. No Ingredients Found"
          </p>
        </div>
      )}

      {loading === HTTP_STATUS.REJECTED && (
        <div className="w-full p-4">
          <p className="text-app-flame font-app-heading text-xl font-bold text-center">
            Something Went Wrong. Try Again Later
          </p>
        </div>
      )}

      {loading === HTTP_STATUS.PENDING && (
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
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5 lg:gap-8">
          {displayItems.map((item, index) => {
            return (
              <div key={index}>
                {<IngredientCard name={item} loading={loading} />}
              </div>
            );
          })}
        </div>
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
