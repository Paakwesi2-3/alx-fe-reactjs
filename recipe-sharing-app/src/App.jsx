import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        Recipe Sharing App
      </h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
