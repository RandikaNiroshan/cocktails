import React from "react";
import { useSelector } from "react-redux";
import { GridWithPagination, SelectLetter } from "../components";

const Cocktails = () => {
  const cocktails = useSelector((state) => state.cocktail.cocktails);
  const loading = useSelector((state) => state.cocktail.loading);
  return (
    <section className="my-4">
      <div className="my-8 mx-10">
        <SelectLetter />
      </div>
      <div className="px-28">
        <GridWithPagination list={cocktails} loading={loading} perPage={8}/>
      </div>
    </section>
  );
};

export default Cocktails;
