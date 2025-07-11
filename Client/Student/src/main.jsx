import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Context/AppContext.jsx";
import AuthContext from "./Context/AuhtContext/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
          <App />
      </AuthContext>
    </BrowserRouter>
  </StrictMode>
);
