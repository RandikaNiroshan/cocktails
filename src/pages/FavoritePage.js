import React from "react";
import { useSelector } from "react-redux";
import { HTTP_STATUS } from "../app/utils/constants";
import { calcOtherCocktailGrid } from "../app/utils/helpers";
import { CocktailsGrid, Title } from "../components";
import { useTitle } from "../hooks/useTitle";
import useWindowSize from "../hooks/useWindowSize";

const FavoritePage = () => {
  const favCocktails = useSelector((state) => state.favorite.favorite);

  useTitle("Favorite Drinks | Cocktails");
  const size = useWindowSize();


  return (
    <>
      <Title className="mt-12 mb-16" title="Collection Of Your Favorites" />
      <div className="px-28 pb-4">
        <CocktailsGrid
          list={favCocktails}
          loading={HTTP_STATUS.FULFILLED}
          perPage={calcOtherCocktailGrid(size.width)}
        />
      </div>
    </>
  );
};

export default FavoritePage;
