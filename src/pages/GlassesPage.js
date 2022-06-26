import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchByGlass } from "../app/features/glassSlice";
import { HTTP_STATUS } from "../app/utils/constants";
import { CocktailsGrid, Title } from "../components";
import { useTitle } from "../hooks/useTitle";

const GlassesPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("id") ?? 0;

  const glasses = useSelector((state) => state.initial.glassesList);
  const loadingGlasses = useSelector((state) => state.initial.loading);
  const cocktails = useSelector((state) => state.glass.cocktails);
  const loading = useSelector((state) => state.glass.loading);

  const [selectedType, setSelectedType] = useState(type);

  useTitle(`${glasses?.[type]?.["strGlass"]} | Cocktails`, loadingGlasses);

  const onChangeType = (index) => {
    setSelectedType(index);
    searchParams.set("id", index);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setSelectedType(type);
    if (glasses.length > 0) {
      dispatch(fetchByGlass({ param: selectedType, typeList: glasses }));
    }
  }, [dispatch, glasses, selectedType, type]);

  return (
    <>
      <Title title="What's Your Preferred Glass?" />
      {loadingGlasses === HTTP_STATUS.FULFILLED && (
        <div className="bg-image flex justify-center gap-4 flex-wrap mt-10 mb-12 py-10 px-28">
          {glasses.map((glass, index) => {
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
                  {glass.strGlass}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <div className="px-28 pb-4">
        <CocktailsGrid list={cocktails} loading={loading} perPage={12} />
      </div>
    </>
  );
};

export default GlassesPage;
