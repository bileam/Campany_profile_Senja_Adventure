import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { PeralatanProvider } from "./Context/Peralatan.jsx";
import { Toaster } from "sonner";

const ResponsiveToaster = () => {
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 639px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const updatePosition = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", updatePosition);
    return () => mediaQuery.removeEventListener("change", updatePosition);
  }, []);

  return (
    <Toaster
      position={isMobile ? "bottom-center" : "top-left"}
      richColors
      visibleToasts={2}
      offset={16}
    />
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PeralatanProvider>
      <CartProvider>
        <App />
        <ResponsiveToaster />
      </CartProvider>
    </PeralatanProvider>
  </StrictMode>
);
