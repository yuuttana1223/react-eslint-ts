import { App } from "@components/App";
import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");

if (!container) {
  throw new Error("No root element found.");
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
