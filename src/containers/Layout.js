import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlcoholic, fetchCategories, fetchGlasses } from "../app/features/initialSlice";
import { Header, Footer } from "./";

const Layout = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.initial.categoriesList);
  const glasses = useSelector((state) => state.initial.glassesList);
  const alcoholic = useSelector((state) => state.initial.alcoholicList);

  useEffect(() => {
    categories.length === 0 && dispatch(fetchCategories());
    glasses.length === 0 && dispatch(fetchGlasses());
    alcoholic.length === 0 && dispatch(fetchAlcoholic());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
