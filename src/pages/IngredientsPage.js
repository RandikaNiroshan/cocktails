import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchIngredients } from "../app/features/ingredientSlice";
import { IngredientsGrid, Title } from "../components";
import { useTitle } from "../hooks/useTitle";

const IngredientsPage = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredient.ingredients);
  const loading = useSelector((state) => state.ingredient.loading);

  useTitle("Ingredients | Cocktails");

  useEffect(() => {
    dispatch(fetchIngredients());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
      <Title className="mt-12 mb-16" title="Perfect Ingredients Never Exists" />
      <div className="px-28 pb-4">
        <IngredientsGrid
          list={ingredients}
          loading={loading}
          perPage={20}
        />
      </div>
    </>
  );
};

export default IngredientsPage;
