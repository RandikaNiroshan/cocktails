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
  cocktails.forEach((cocktail) => {
    const data = organizeCocktail(cocktail);
    organizedCocktails.push(data);
  });
  return organizedCocktails;
};
