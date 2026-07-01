import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { PeralatanProvider } from "./Context/Peralatan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PeralatanProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PeralatanProvider>
  </StrictMode>
);
