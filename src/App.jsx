import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="cocktail" element={<SharedLayout />}>
          <Route path=":id" element={<SingleCocktail />} />
        </Route>

        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
