import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            <button onClick={() => toggleFavorite(recipe.id)}>
              {favorites.includes(recipe.id) ? '★ Unfavorite' : '☆ Favorite'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
