import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CocktailCard from "./CocktailCard";

const GridWithPagination = ({ list, loading, perPage }) => {
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
        {displayItems.map((item, index) => {
          return (
            <div key={index}>{loading || <CocktailCard cocktail={item} />}</div>
          );
        })}
      </div>

      <div className="mx-8 my-10">
        {loading || (
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
