import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />   {/* ✅ home route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* ✅ details route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
