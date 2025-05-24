import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Configuración de variables de entorno para desarrollo
if (import.meta.env.DEV) {
  console.log('🚀 Aplicación en modo desarrollo');
  console.log('API URL:', import.meta.env.VITE_API_URL || 'No configurada');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);