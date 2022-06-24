import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchByGlass } from "../app/features/glassSlice";
import { HTTP_STATUS } from "../app/utils/constants";
import { GridWithPagination } from "../components";
import { useTitle } from "../hooks/useTitle";

const GlassesPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const type = searchParams.get("id") ?? 0;
  const [selectedType, setSelectedType] = useState(type);

  const glasses = useSelector((state) => state.initial.glassesList);
  const loadingGlasses = useSelector((state) => state.initial.loading);

  const cocktails = useSelector((state) => state.glass.cocktails);
  const loading = useSelector((state) => state.glass.loading);

  useTitle(`${glasses?.[type]?.["strGlass"]} | Cocktails`, loadingGlasses);

  useEffect(() => {
    if(glasses[selectedType]["strGlass"] !== undefined){
      dispatch(fetchByGlass(glasses[selectedType]["strGlass"]));
    }
  },[dispatch, glasses, selectedType]);
  return (
    <div>
      <div>GlassesPage - {type}</div>
      {loadingGlasses === HTTP_STATUS.FULFILLED && (
        <div className="flex justify-center gap-8">
          {glasses.map((glass, index) => {
            return (
              <div
                key={index}
                className={`${index === selectedType ? "bg-app-flame" : "bg-app-cadet"}`}
                onClick={() => setSelectedType(index)}
              >
                {glass.strGlass}
              </div>
            );
          })}
        </div>
      )}
      <div>
        <GridWithPagination
          list={cocktails}
          loading={loading}
          perPage={16}
        />
      </div>
    </div>
  );
};

export default GlassesPage;