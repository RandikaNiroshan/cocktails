import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer, SearchCocktails } from "../";
import { hideSearchModal } from "../../app/features/modalSlice";
import { Modal } from "../../components";
import {
  fetchAlcoholic,
  fetchCategories,
  fetchGlasses,
} from "../../app/features/initialSlice";

const Layout = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.initial.categoriesList);
  const glasses = useSelector((state) => state.initial.glassesList);
  const alcoholic = useSelector((state) => state.initial.alcoholicList);
  const showModal = useSelector((state) => state.modal.showSearchModal);

  const onCloseModal = () => {
    dispatch(hideSearchModal());
  };

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
      {showModal && (
        <Modal onCloseModal={onCloseModal}>
          <SearchCocktails />
        </Modal>
      )}
      <Footer />
    </>
  );
};

export default Layout;
