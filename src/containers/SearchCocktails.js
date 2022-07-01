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

  const debounceSearch = useDebounce(searchText.trim(), 1000);
  const size = useWindowSize();

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    debounceSearch !== "" && dispatch(searchCocktails(debounceSearch));
  }, [debounceSearch, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center w-[calc(95vw-40px)] max-w-[calc(95vw-40px)] md:w-[calc(90vw-40px)] md:max-w-[calc(90vw-40px)] px-2 py-4">
      <input
        onChange={onChangeHandler}
        type="text"
        placeholder="Start Typing"
        className="w-full h-auto px-4 py-2 bg-app-cadet rounded-lg text-[12px] md:text-[13px] lg:text-[15px] xl:text-[16px] font-app-main text-white tracking-wider"
      />
      {debounceSearch !== "" && (
        <div className="w-full mt-3 md:mt-4">
          <SearchItemsGrid
            list={cocktails}
            loading={loading}
            perPage={calcSearchGrid(size.width)}
          />
        </div>
      )}
    </div>
  );
};

export default SearchCocktails;
