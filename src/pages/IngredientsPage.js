import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchIngredients } from "../app/features/ingredientSlice";
import { hideIngredientModal } from "../app/features/modalSlice";
import { AboutIngredient, IngredientsGrid, Title, Modal } from "../components";
import { useTitle } from "../hooks/useTitle";

const IngredientsPage = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredient.ingredients);
  const loading = useSelector((state) => state.ingredient.loading);
  const showModal = useSelector((state) => state.modal.showIngredientModal);

  useTitle("Ingredients | Cocktails");

  const onCloseModal = () => {
    dispatch(hideIngredientModal());
  };

  useEffect(() => {
    dispatch(fetchIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title className="mt-12 mb-16" title="Perfect Ingredients Never Exists" />
      <div className="px-28 pb-4">
        <IngredientsGrid list={ingredients} loading={loading} perPage={20} />
      </div>
      {showModal && (
        <Modal onCloseModal={onCloseModal}>
          <AboutIngredient />
        </Modal>
      )}
    </>
  );
};

export default IngredientsPage;
