import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCocktailDetails } from "../app/features/detailsSlice";
import { Title } from "../components";
import { CocktailInfo, Instructions, VideoTutorial } from "../containers";
import { useTitle } from "../hooks/useTitle";

const CocktailPage = () => {
  const dispatch = useDispatch();
  const cocktail = useSelector((state) => state.details.cocktail);
  const loading = useSelector((state) => state.details.loading);
  const { id } = useParams();
  useTitle(`${cocktail.drink} | Cocktails`, loading);

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
    </>
  );
};

export default CocktailPage;
