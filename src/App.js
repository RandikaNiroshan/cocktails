import { Route, Routes } from "react-router-dom";
import { Layout } from "./containers";
import {
  AboutPage,
  AlcoholicPage,
  CategoriesPage,
  CocktailPage,
  ErrorPage,
  FavoritePage,
  GlassesPage,
  HomePage,
  IngredientsPage,
} from "./pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails/:id" element={<CocktailPage />} />
        <Route path="/alcoholic" element={<AlcoholicPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/glasses" element={<GlassesPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
