import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
