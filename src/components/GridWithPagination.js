import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { DummyCocktail } from "../app/utils/data";
import { HTTP_STATUS } from "../app/utils/constants";
import CocktailCard from "./cards/CocktailCard";

const GridWithPagination = ({ list, loading, error, perPage }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = perPage ?? 8;
  const itemsVisited = pageNumber * itemsPerPage;

  const displayItems = list.slice(itemsVisited, itemsVisited + itemsPerPage);

  const pageCount = Math.ceil(list.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setPageNumber(0);
  }, [list]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-8">
        {loading === HTTP_STATUS.PENDING && (
          <>
            {[...Array(itemsPerPage)].map((_item, index) => {
              return (
                <div key={index}>
                  {<CocktailCard cocktail={DummyCocktail} loading={loading} />}
                </div>
              );
            })}
          </>
        )}
        {loading === HTTP_STATUS.REJECTED && (
          <div>
            <p>{error}</p>
          </div>
        )}
        {loading === HTTP_STATUS.FULFILLED &&
          list.length > 0 &&
          displayItems.map((item, index) => {
            return (
              <div key={index}>
                {<CocktailCard cocktail={item} loading={loading} />}
              </div>
            );
          })}
        {loading === HTTP_STATUS.FULFILLED && list.length === 0 && (
          <div>
            <p>No drinks found</p>
          </div>
        )}
      </div>

      <div className="mx-8 my-10">
        {loading === HTTP_STATUS.FULFILLED && list.length > 0 && (
          <ReactPaginate
            pageRangeDisplayed={5}
            previousLabel={" < "}
            nextLabel={" > "}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"flex items-center justify-center gap-2"}
            activeLinkClassName={"bg-app-cadet text-white"}
            previousLinkClassName={"pagination-buttons mr-2 px-5"}
            nextLinkClassName={"pagination-buttons ml-2 px-5"}
            pageLinkClassName={"pagination-buttons"}
          />
        )}
      </div>
    </div>
  );
};

export default GridWithPagination;