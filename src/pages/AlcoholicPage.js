import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchByAlcoholic } from "../app/features/alcoholicSlice";
import { HTTP_STATUS } from "../app/utils/constants";
import { GridWithPagination, Title } from "../components";
import { useTitle } from "../hooks/useTitle";

const AlcoholicPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("id") ?? 0;

  const alcoholicTypes = useSelector((state) => state.initial.alcoholicList);
  const loadingTypes = useSelector((state) => state.initial.loading);
  const cocktails = useSelector((state) => state.alcoholic.cocktails);
  const loading = useSelector((state) => state.alcoholic.loading);

  const [selectedType, setSelectedType] = useState(type);

  useTitle(
    `${alcoholicTypes?.[selectedType]?.["strAlcoholic"]} | Cocktails`,
    loadingTypes
  );

  const onChangeType = (index) => {
    setSelectedType(index);
    searchParams.set("id", index);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setSelectedType(type);
    if (alcoholicTypes.length > 0) {
      dispatch(
        fetchByAlcoholic({ param: selectedType, typeList: alcoholicTypes })
      );
    }
  }, [dispatch, alcoholicTypes, selectedType, type]);

  return (
    <>
      <Title title="Select Cocktails Based On"/>
      {loadingTypes === HTTP_STATUS.FULFILLED && (
        <div className="bg-image flex justify-center gap-6 flex-wrap mt-10 mb-12 py-10 px-28">
          {alcoholicTypes.map((alcoholic, index) => {
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
                  {alcoholic.strAlcoholic}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <div className="px-28 pb-4">
        <GridWithPagination list={cocktails} loading={loading} perPage={12} />
      </div>
    </>
  );
};

export default AlcoholicPage;
