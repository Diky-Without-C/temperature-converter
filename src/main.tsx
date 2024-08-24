import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/physic";
import Shell from "./layouts/Shell";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Shell>
      <Home />
    </Shell>
  </React.StrictMode>,
);
