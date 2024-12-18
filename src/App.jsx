import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/Errorrr.jsx"; // Pastikan file dan path benar
import ProductsPage from "./pages/products.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* Rute fallback untuk menangani 404 atau rute yang tidak ditemukan */}
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
