import React from "react";
import ReactPaginate from "react-paginate";
import { SCREEN_SIZE } from "../app/utils/constants";
import useWindowSize from "../hooks/useWindowSize";

const Pagination = ({pageCount, setPageNumber}) => {
  const size = useWindowSize();

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <ReactPaginate
      pageRangeDisplayed={size.width < SCREEN_SIZE.MD ? 2 : 5}
      marginPagesDisplayed={size.width < SCREEN_SIZE.MD ? 1 : 3}
      previousLabel={" < "}
      nextLabel={" > "}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"flex items-center justify-center gap-2"}
      activeLinkClassName={"bg-app-cadet text-white"}
      previousLinkClassName={"pagination-buttons mr-2 md:px-5"}
      nextLinkClassName={"pagination-buttons ml-2 md:px-5"}
      pageLinkClassName={"pagination-buttons"}
    />
  );
};

export default Pagination;
