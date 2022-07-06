import React from "react";
import { useSelector } from "react-redux";
import { HTTP_STATUS } from "../app/utils/constants";
import { calcOtherCocktailGrid } from "../app/utils/helpers";
import { CocktailsGrid, Title } from "../components";
import AnimateRoute from "../containers/layout/AnimateRoute";
import { useTitle } from "../hooks/useTitle";
import useWindowSize from "../hooks/useWindowSize";

const FavoritePage = () => {
  const favCocktails = useSelector((state) => state.favorite.favorite);

  useTitle("Favorite Drinks | Cocktails");
  const size = useWindowSize();

  return (
    <AnimateRoute>
      <Title
        className="mt-7 mb-8 md:mt-10 md:mb-12 lg:mt-12 lg:mb-16"
        title="Collection Of Your Favorites"
      />
      <div className="px-[5vw] md:px-[6vw] lg:px-[7vw] overflow-hidden">
        <CocktailsGrid
          list={favCocktails}
          loading={HTTP_STATUS.FULFILLED}
          error={null}
          perPage={calcOtherCocktailGrid(size.width)}
        />
      </div>
    </AnimateRoute>
  );
};

export default FavoritePage;
