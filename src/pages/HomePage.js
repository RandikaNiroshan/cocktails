import React from "react";
import { Title } from "../components";
import { Cocktails, Home, Popular, Stats } from "../containers";
import { useTitle } from "../hooks/useTitle";

const HomePage = () => {
  useTitle("Cocktails");
  
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
