import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({pageCount, setPageNumber}) => {
    
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
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
  );
};

export default Pagination;
