import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialFetch } from "../../app/features/cocktailsSlice";
import { GridWithPagination, SelectLetter } from "../../components";

const Cocktails = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector(state => state.cocktails.cocktails);
  const loading = useSelector(state => state.cocktails.loading);
  
  useEffect(() => {
    dispatch(initialFetch());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <section className="my-4">
      <div className="my-8 mx-10">
        <SelectLetter />
      </div>
      <div className="px-28">
        <GridWithPagination list={cocktails} loading={loading}/>
      </div>
    </section>
  );
};

export default Cocktails;