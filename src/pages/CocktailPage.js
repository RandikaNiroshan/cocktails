import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { fetchCocktailDetails } from "../app/features/detailsSlice";
import { AboutIngredient, Title, Modal } from "../components";
import { CocktailInfo, Instructions, VideoTutorial } from "../containers";
import { hideIngredientModal } from "../app/features/modalSlice";


const CocktailPage = () => {
  const dispatch = useDispatch();
  const cocktail = useSelector((state) => state.details.cocktail);
  const loading = useSelector((state) => state.details.loading);
  const { id } = useParams();
  
  const showModal = useSelector((state) => state.modal.showIngredientModal);
  
  useTitle(`${cocktail.drink} | Cocktails`, loading);

  const onCloseModal = () => {
    dispatch(hideIngredientModal());
  };

  useEffect(() => {
    dispatch(fetchCocktailDetails(id));
  }, [id, dispatch]);
  return (
    <>
      <CocktailInfo cocktail={cocktail} loading={loading} />
      <Title title={"Instructions"} />
      <Instructions cocktail={cocktail} loading={loading} />
      <Title title={"Video Guide"} />
      <VideoTutorial cocktail={cocktail} loading={loading} />
      {showModal && (
        <Modal onCloseModal={onCloseModal} show={showModal}>
          <AboutIngredient />
        </Modal>
      )}
    </>
  );
};

export default CocktailPage;
