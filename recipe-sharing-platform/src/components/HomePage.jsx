import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Recipe →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
