import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const AlcoholicPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("id") ?? 0;
  const alcoholicTypes = useSelector((state) => state.initial.alcoholicList);
  const loadingTypes = useSelector((state) => state.initial.loading);

  useTitle(`${alcoholicTypes?.[type]?.["strAlcoholic"]} | Cocktails`, loadingTypes);
  return (
    <div>
      <div>AlcoholicPage- {type}</div>
    </div>
  );
};

export default AlcoholicPage;
