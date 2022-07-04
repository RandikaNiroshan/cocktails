import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./containers";
import {
  AlcoholicPage,
  CategoriesPage,
  CocktailPage,
  CocktailsByIngredientPage,
  ErrorPage,
  FavoritePage,
  GlassesPage,
  HomePage,
  IngredientsPage,
} from "./pages";

function App() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cocktails/:id" element={<CocktailPage />} />
          <Route path="/alcoholic" element={<AlcoholicPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/glasses" element={<GlassesPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route
            path="/ingredients/:id"
            element={<CocktailsByIngredientPage />}
          />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
