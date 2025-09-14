import React from "react";
import { useRecipeStore } from "./recipeStore";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (!recipes.length) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
