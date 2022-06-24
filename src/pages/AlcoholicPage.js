import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchByAlcoholic } from "../app/features/alcoholicSlice";
import { HTTP_STATUS } from "../app/utils/constants";
import { GridWithPagination } from "../components";
import { useTitle } from "../hooks/useTitle";

const AlcoholicPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const type = searchParams.get("id") ?? 0;

  const alcoholicTypes = useSelector((state) => state.initial.alcoholicList);
  const loadingTypes = useSelector((state) => state.initial.loading);
  const cocktails = useSelector((state) => state.alcoholic.cocktails);
  const loading = useSelector((state) => state.alcoholic.loading);

  console.log("rebuilding");

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
    <div>
      <div>AlcoholicPage- {type}</div>
      {loadingTypes === HTTP_STATUS.FULFILLED && (
        <div className="flex justify-center gap-8">
          {alcoholicTypes.map((alcoholic, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === Number(selectedType)
                    ? "bg-app-flame"
                    : "bg-app-cadet"
                }`}
                onClick={() => onChangeType(index)}
              >
                {alcoholic.strAlcoholic}
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

export default AlcoholicPage;
