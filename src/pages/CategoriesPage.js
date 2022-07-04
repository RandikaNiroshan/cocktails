import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchByCategory } from "../app/features/categorySlice";
import { HTTP_STATUS } from "../app/utils/constants";
import { calcOtherCocktailGrid } from "../app/utils/helpers";
import { CocktailsGrid, Title } from "../components";
import AnimateRoute from "../containers/layout/AnimateRoute";
import { useTitle } from "../hooks/useTitle";
import useWindowSize from "../hooks/useWindowSize";
import { motion } from "framer-motion";
import { fromBelow } from "../app/utils/animationsHelper";

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
    <AnimateRoute>
      <Title title="Select From Your Favorite Category" />
      {loadingCategories === HTTP_STATUS.FULFILLED && (
        <motion.div
          variants={fromBelow}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 0.8,
            delay: 0.4,
          }}
          className="bg-image flex justify-center gap-3 md:gap-5 lg:gap-6 flex-wrap mt-7 mb-8 md:mt-10 md:mb-12 py-6 md:py-8 lg:py-10 px-2 md:px-20 lg:px-28"
        >
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className={`rounded-md px-[12px] md:px-4 lg:px-6 py-[5px] md:py-[6px] lg:py-2 drop-shadow-lg cursor-pointer group md:hover:scale-110 basic-transition ${
                  index === Number(selectedType) ? "bg-app-flame" : "bg-white"
                }`}
                onClick={() => onChangeType(index)}
              >
                <p
                  className={`text-app-cadet text-sm md:text-base lg:text-lg font-app-text ${
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
        </motion.div>
      )}
      <div className="px-[5vw] md:px-[6vw] lg:px-[7vw] overflow-hidden">
        <CocktailsGrid
          list={cocktails}
          loading={loading}
          perPage={calcOtherCocktailGrid(size.width)}
        />
      </div>
    </AnimateRoute>
  );
};

export default CategoriesPage;
