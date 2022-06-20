import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCocktailDetails } from "../app/features/detailsSlice";
import { CocktailInfo } from "../containers";

const CocktailPage = () => {
  const dispatch = useDispatch();
  const cocktail = useSelector((state) => state.details.cocktail);
  const loading = useSelector((state) => state.details.loading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCocktailDetails(id));
  }, [id, dispatch]);
  return (
    <>
      <CocktailInfo cocktail={cocktail} loading={loading} />
    </>
  );
};

export default CocktailPage;
