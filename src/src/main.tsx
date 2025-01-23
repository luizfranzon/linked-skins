import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { App } from "./App.tsx";

import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
