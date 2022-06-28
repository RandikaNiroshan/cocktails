import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchByFirstLetter, initialFetch } from "../../app/features/cocktailsSlice";
import { CocktailsGrid, SelectLetter } from "../../components";

const Cocktails = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector((state) => state.cocktails.cocktails);
  const loading = useSelector((state) => state.cocktails.loading);
  const selectedLetter = useSelector((state) => state.cocktails.selectedLetter);

  useEffect(() => {
    if(selectedLetter === ""){
      dispatch(initialFetch());
    }else{
      dispatch(fetchByFirstLetter(selectedLetter));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="my-4" id="cocktails">
      <div className="my-8 mx-10">
        <SelectLetter />
      </div>
      <div className="px-28">
        <CocktailsGrid
          list={cocktails}
          loading={loading}
          fullData={true}
        />
      </div>
    </section>
  );
};

export default Cocktails;
