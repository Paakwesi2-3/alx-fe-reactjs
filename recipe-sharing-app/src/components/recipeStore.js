import create from 'zustand';

const useRecipeStore = create(set => ({
  // Required base
  recipes: [],
  addRecipe: (newRecipe) =>
    set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  // Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set(state => ({
      favorites: [...new Set([...state.favorites, recipeId])]
    })),
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),

  // Recommendations
  recommendations: [],
  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Search + Filtering
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),
}));

export default useRecipeStore;