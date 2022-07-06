import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByIngredient } from "../app/features/fetchByIngredientSlice";
import { calcOtherCocktailGrid } from "../app/utils/helpers";
import { CocktailsGrid, Title } from "../components";
import AnimateRoute from "../containers/layout/AnimateRoute";
import { useTitle } from "../hooks/useTitle";
import useWindowSize from "../hooks/useWindowSize";

const CocktailsByIngredientPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cocktails = useSelector((state) => state.fetchByIngredient.cocktails);
  const loading = useSelector((state) => state.fetchByIngredient.loading);
  const error = useSelector((state) => state.fetchByIngredient.error);

  useTitle(`Cocktails For ${id} | Cocktails`, loading);
  const size = useWindowSize();
  
  useEffect(() => {
    const promise = dispatch(fetchByIngredient(id));

    return () => {
      promise.abort();
    };
  }, [id, dispatch]);

  return (
    <AnimateRoute>
      <Title className="mt-7 mb-8 md:mt-10 md:mb-12 lg:mt-12 lg:mb-16" title={`Recipes For ${id}`} />
      <div className="px-[5vw] md:px-[6vw] lg:px-[7vw] overflow-hidden">
        <CocktailsGrid
          list={cocktails}
          loading={loading}
          error={error}
          perPage={calcOtherCocktailGrid(size.width)}
        />
      </div>
    </AnimateRoute>
  );
};

export default CocktailsByIngredientPage;
