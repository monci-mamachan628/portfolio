import { HashRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFounds.jsx";
import { Home } from "./pages/Home.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
