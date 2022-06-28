import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByIngredient } from "../app/features/fetchByIngredientSlice";
import { CocktailsGrid, Title } from "../components";
import { useTitle } from "../hooks/useTitle";

const CocktailsByIngredientPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cocktails = useSelector((state) => state.fetchByIngredient.cocktails);
  const loading = useSelector((state) => state.fetchByIngredient.loading);

  useTitle(`Cocktails For ${id} | Cocktails`, loading);

  useEffect(() => {
    dispatch(fetchByIngredient(id));
  }, [id, dispatch]);
  
  return (
    <>
      <Title className="mt-12 mb-16" title={`Recipes For ${id}`} />
      <div className="px-28 pb-4">
        <CocktailsGrid list={cocktails} loading={loading} perPage={12} />
      </div>
    </>
  );
};

export default CocktailsByIngredientPage;