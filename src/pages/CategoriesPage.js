import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const CategoriesPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("id") ?? 0;

  const categories = useSelector((state) => state.initial.categoriesList);
  const loadingCategories = useSelector((state) => state.initial.loading);

  useTitle(`${categories?.[type]?.["strCategory"]} | Cocktails`, loadingCategories);
  return (
    <div>
      <div>CategoriesPage - {type}</div>
    </div>
  );
};

export default CategoriesPage;