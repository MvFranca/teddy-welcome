import "./index.css";
import "@teddy/design-system/dist/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WelcomeScreen from "./ui/pages/welcome";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WelcomeScreen onEnter={() => alert("Teste!")} />;
  </StrictMode>
);
