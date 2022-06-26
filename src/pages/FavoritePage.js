import React from "react";
import { useSelector } from "react-redux";
import { HTTP_STATUS } from "../app/utils/constants";
import { GridWithPagination, Title } from "../components";
import { useTitle } from "../hooks/useTitle";

const FavoritePage = () => {
  const favCocktails = useSelector((state) => state.favorite.favorite);

  useTitle("Favorite Drinks | Cocktails");

  return (
    <>
      <Title className="mt-12 mb-16" title="Collection Of Your Favorites" />
      <div className="px-28 pb-4">
        <GridWithPagination
          list={favCocktails}
          loading={HTTP_STATUS.FULFILLED}
          perPage={12}
        />
      </div>
    </>
  );
};

export default FavoritePage;
