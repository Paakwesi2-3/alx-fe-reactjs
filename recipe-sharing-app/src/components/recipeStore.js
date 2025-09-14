import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe], // keep filtered in sync
  })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return { 
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return { 
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      };
    }),

  setSearchTerm: (term) =>
    set((state) => {
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase())
        ),
      };
    }),
}));
