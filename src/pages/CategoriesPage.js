import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchByCategory } from "../app/features/categorySlice";
import { HTTP_STATUS } from "../app/utils/constants";
import { GridWithPagination } from "../components";
import { useTitle } from "../hooks/useTitle";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const type = searchParams.get("id") ?? 0;
  const [selectedType, setSelectedType] = useState(type);

  const categories = useSelector((state) => state.initial.categoriesList);
  const loadingCategories = useSelector((state) => state.initial.loading);

  const cocktails = useSelector((state) => state.category.cocktails);
  const loading = useSelector((state) => state.category.loading);

  useTitle(
    `${categories?.[type]?.["strCategory"]} | Cocktails`,
    loadingCategories
  );

  useEffect(() => {
    if (categories[selectedType]["strCategory"] !== undefined) {
      dispatch(fetchByCategory(categories[selectedType]["strCategory"]));
    }
  }, [dispatch, categories, selectedType]);
  return (
    <div>
      <div>CategoriesPage - {type}</div>
      {loadingCategories === HTTP_STATUS.FULFILLED && (
        <div className="flex justify-center gap-8">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === selectedType ? "bg-app-flame" : "bg-app-cadet"
                }`}
                onClick={() => setSelectedType(index)}
              >
                {category.strCategory}
              </div>
            );
          })}
        </div>
      )}
      <div>
        <GridWithPagination list={cocktails} loading={loading} perPage={16} />
      </div>
    </div>
  );
};

export default CategoriesPage;
