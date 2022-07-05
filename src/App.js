import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { hideIngredientModal, hideMobileMenu, hideSearchModal } from "./app/features/modalSlice";
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
  const dispatch = useDispatch();

  const closeOpenedModals = () => {
    dispatch(hideIngredientModal());
    dispatch(hideSearchModal());
    dispatch(hideMobileMenu());
  }
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter onExitComplete={closeOpenedModals}>
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
