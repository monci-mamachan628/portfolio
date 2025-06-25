import { HashRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFounds.jsx";
import { Home } from "./pages/Home.jsx";

function App() {
  return (
     
    <HashRouter>
      <Home />
    </HashRouter>
  );
}

export default App;
