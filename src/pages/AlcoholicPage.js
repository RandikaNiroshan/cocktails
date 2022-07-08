import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchByAlcoholic } from "../app/features/alcoholicSlice";
import { calcOtherCocktailGrid } from "../app/utils/helpers";
import { CocktailsGrid, Title } from "../components";
import AnimateRoute from "../containers/layout/AnimateRoute";
import { useTitle } from "../hooks/useTitle";
import useWindowSize from "../hooks/useWindowSize";
import { alcoholicTypes } from "../app/utils/data";

const AlcoholicPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("id") ?? 0;

  const types = alcoholicTypes;
  const cocktails = useSelector((state) => state.alcoholic.cocktails);
  const loading = useSelector((state) => state.alcoholic.loading);
  const error = useSelector((state) => state.alcoholic.error);

  const [selectedType, setSelectedType] = useState(type);

  useTitle(`${types?.[selectedType] ?? "Error"} | Cocktails`);
  const size = useWindowSize();

  const onChangeType = (index) => {
    setSelectedType(index);
    searchParams.set("id", index);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setSelectedType(type);
    const promise = dispatch(fetchByAlcoholic(selectedType));

    return () => {
      promise.abort();
    };
  }, [dispatch, selectedType, type]);

  return (
    <AnimateRoute>
      <Title title="Select Cocktails Based On" />
      <div className="bg-image flex justify-center gap-3 md:gap-5 lg:gap-6 flex-wrap mt-7 mb-8 md:mt-10 md:mb-12 py-6 md:py-8 lg:py-10 px-2 md:px-20 lg:px-28">
        {types.map((alcoholic, index) => {
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
                {alcoholic}
              </p>
            </div>
          );
        })}
      </div>
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

export default AlcoholicPage;
