import { FeaturedCocktails } from "./data";

export const organizeCocktail = (cocktail) => {
  const cocktailData = {
    id: cocktail.idDrink,
    drink: cocktail.strDrink,
    category: cocktail.strCategory,
    tags: cocktail.strTags,
    IBA: cocktail.strIBA,
    alcoholic: cocktail.strAlcoholic,
    glass: cocktail.strGlass,
    instructions: cocktail.strInstructions,
    image: cocktail.strDrinkThumb,
  };

  const ingredientArray = [];
  for (let index = 1; index <= 15; index++) {
    if (
      cocktail["strIngredient" + index] === null ||
      cocktail["strIngredient" + index] === ""
    ) {
      break;
    }

    ingredientArray.push({
      name: cocktail["strIngredient" + index],
      measure: cocktail["strMeasure" + index]
        ? cocktail["strMeasure" + index]
        : "",
    });
  }

  return { ...cocktailData, ingredients: ingredientArray };
};

export const organizeCocktailList = (cocktails) => {
  const organizedCocktails = [];
  if (cocktails !== null) {
    cocktails.forEach((cocktail) => {
      const data = organizeCocktail(cocktail);
      organizedCocktails.push(data);
    });
  }
  return organizedCocktails;
};

export const organizeIngredient = (ingredient) => {
  return {
    id: ingredient.idIngredient,
    name: ingredient.strIngredient,
    description: ingredient.strDescription,
    type: ingredient.strType,
    alcohol: ingredient.strAlcohol,
    abv: ingredient.strABV,
  };
};

export const organizeIngredients = (ingredients) => {
  const organizedIngredients = [];
  if (ingredients !== null) {
    ingredients.forEach((item) => {
      const data = item["strIngredient1"];
      organizedIngredients.push(data);
    });
  }
  return organizedIngredients;
};

export const featuredCocktails = () => {
  const shuffled = FeaturedCocktails.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6);
};

export const youtubeResponseToVideos = (response) => {
  const videoIdList = [];
  if (response !== null) {
    response.forEach((item) => videoIdList.push(item.id.videoId));
  }
  return videoIdList;
};
