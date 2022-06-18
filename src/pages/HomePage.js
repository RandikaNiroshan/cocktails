import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "../components";
import { Cocktails, Home, Popular, Stats } from "../containers";
import { initialFetch, randomDrink } from "../app/features/cocktailSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialFetch());
    dispatch(randomDrink());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Home />
      <Title title="Cocktails from around the world" />
      <Stats />
      <Title title="Most popular cocktails" />
      <Popular />
      <Title title="Browse By Name" />
      <Cocktails />
    </>
  );
};

export default HomePage;
