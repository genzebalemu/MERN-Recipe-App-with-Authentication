
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import  Home  from "./pages/home";
import CreateRecipe from './pages/create-recipe';
import  Auth  from "./pages/Auth";
import  SavedRecipes from "./pages/saved-recipes";
import NavBar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
