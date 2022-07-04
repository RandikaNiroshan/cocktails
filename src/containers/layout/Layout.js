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

const Layout = ({children}) => {
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
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow-0 flex-shrink-0 flex-">
        <Header />
      </div>
      <div className="flex-grow flex-shrink-0">{children}</div>
      <div className="flex-grow-0 flex-shrink-0">
        <Footer />
      </div>
      {showModal && (
        <Modal onCloseModal={onCloseModal} show={showModal}>
          <SearchCocktails />
        </Modal>
      )}
    </div>
  );
};

export default Layout;
