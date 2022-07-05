import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer, SearchCocktails } from "../";
import { hideSearchModal } from "../../app/features/modalSlice";
import { Modal } from "../../components";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showSearchModal);

  const onCloseModal = () => {
    dispatch(hideSearchModal());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow-0 flex-shrink-0 flex-">
        <Header />
      </div>
      <div className="flex-grow flex-shrink-0">{children}</div>
      <div className="flex-grow-0 flex-shrink-0">
        <Footer />
      </div>
      <Modal onCloseModal={onCloseModal} show={showModal}>
        <SearchCocktails />
      </Modal>
    </div>
  );
};

export default Layout;
