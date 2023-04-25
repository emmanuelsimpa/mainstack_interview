import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App";
import "./index.css";
import "animate.css";
import "./fonts/Söhne-Font-Family-Collection/Test Söhne/TestSöhne-Buch.otf";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
