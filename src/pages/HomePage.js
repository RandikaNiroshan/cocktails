import React from "react";
import { Title } from "../components";
import { Cocktails, Home, Popular, Stats } from "../containers";
import AnimateRoute from "../containers/layout/AnimateRoute";
import { useTitle } from "../hooks/useTitle";

const HomePage = () => {
  useTitle("Cocktails");

  return (
    <AnimateRoute>
      <Home />
      <Title title="Cocktails from around the world" />
      <Stats />
      <Title title="Most popular cocktails" />
      <Popular />
      <Title title="Browse Cocktails By Name" />
      <Cocktails />
    </AnimateRoute>
  );
};

export default HomePage;
