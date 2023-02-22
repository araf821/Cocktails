import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
