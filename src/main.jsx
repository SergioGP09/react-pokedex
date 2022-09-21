import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PokedexContextProvider } from "./context/PokedexContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokedexContextProvider>
      <App />
    </PokedexContextProvider>
  </React.StrictMode>
);
