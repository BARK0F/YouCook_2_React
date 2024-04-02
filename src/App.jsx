import Routes from "./routes/index.jsx";
import RecipeForm from "./components/RecipeForm.jsx";

function App() {
  return (
    <main className="container">
      <Routes />
        <RecipeForm></RecipeForm>
    </main>
  );
}

export default App;
