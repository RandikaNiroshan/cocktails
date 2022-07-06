import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCocktails } from "../app/features/searchSlice";
import { calcSearchGrid } from "../app/utils/helpers";
import { SearchItemsGrid } from "../components";
import useDebounce from "../hooks/useDebounce";
import useWindowSize from "../hooks/useWindowSize";

const SearchCocktails = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const cocktails = useSelector((state) => state.search.cocktails);
  const loading = useSelector((state) => state.search.loading);
  const error = useSelector((state) => state.search.error);

  const debounceSearch = useDebounce(searchText.trim(), 1000);
  const size = useWindowSize();

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (debounceSearch !== "") {
      const promise = dispatch(searchCocktails(debounceSearch));
      return () => {
        promise.abort();
      };
    }
  }, [debounceSearch, dispatch]);

  return (
    <div
      className={`flex flex-col justify-center items-center w-[calc(95vw-40px)] max-w-[calc(95vw-40px)] md:w-[calc(90vw-40px)] md:max-w-[calc(90vw-40px)] lg:w-[calc(80vw-40px)] lg:max-w-[calc(80vw-40px)] xl:w-[calc(65vw-40px)] xl:max-w-[calc(65vw-40px)] px-2 md:px-3 lg:px-4 pt-4 cursor-default ${
        debounceSearch !== "" ? "pb-4" : "pb-8 md:pb-10"
      }`}
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl my-2 capitalize text-app-flame font-extrabold font-app-heading">
        Search Cocktails
      </h1>
      <input
        onChange={onChangeHandler}
        type="text"
        className="w-full h-auto px-4 md:px-6 py-2 md:py-3 bg-app-cadet rounded-lg text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] font-app-main text-white tracking-wider border-1 ring-1 border-app-cadet ring-app-cadet focus:border-app-cadet focus:ring-app-cadet"
        placeholder="Start Typing To Search"
      />
      {debounceSearch !== "" && (
        <div className="w-full mt-3 md:mt-4">
          <SearchItemsGrid
            list={cocktails}
            loading={loading}
            error={error}
            perPage={calcSearchGrid(size.width)}
          />
        </div>
      )}
    </div>
  );
};

export default SearchCocktails;
