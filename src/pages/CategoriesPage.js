import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchByCategory } from "../app/features/categorySlice";
import { HTTP_STATUS } from "../app/utils/constants";
import { calcOtherCocktailGrid } from "../app/utils/helpers";
import { CocktailsGrid, Title } from "../components";
import { useTitle } from "../hooks/useTitle";
import useWindowSize from "../hooks/useWindowSize";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("id") ?? 0;

  const categories = useSelector((state) => state.initial.categoriesList);
  const loadingCategories = useSelector((state) => state.initial.loading);
  const cocktails = useSelector((state) => state.category.cocktails);
  const loading = useSelector((state) => state.category.loading);

  const [selectedType, setSelectedType] = useState(type);

  useTitle(
    `${categories?.[type]?.["strCategory"]} | Cocktails`,
    loadingCategories
  );
  const size = useWindowSize();

  const onChangeType = (index) => {
    setSelectedType(index);
    searchParams.set("id", index);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setSelectedType(type);
    if (categories.length > 0) {
      dispatch(fetchByCategory({ param: selectedType, typeList: categories }));
    }
  }, [dispatch, categories, selectedType, type]);

  return (
    <>
      <Title title="Select From Your Favorite Category" />
      {loadingCategories === HTTP_STATUS.FULFILLED && (
        <div className="bg-image flex justify-center gap-4 flex-wrap mt-10 mb-12 py-10 px-28">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className={`rounded-md px-6 py-2 drop-shadow-lg cursor-pointer group hover:scale-110 basic-transition ${
                  index === Number(selectedType) ? "bg-app-flame" : "bg-white"
                }`}
                onClick={() => onChangeType(index)}
              >
                <p
                  className={`text-app-cadet text-lg font-app-text ${
                    index === Number(selectedType)
                      ? "text-white"
                      : "text-app-cadet"
                  }`}
                >
                  {category.strCategory}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <div className="px-28 pb-4">
        <CocktailsGrid
          list={cocktails}
          loading={loading}
          perPage={calcOtherCocktailGrid(size.width)}
        />
      </div>
    </>
  );
};

export default CategoriesPage;
