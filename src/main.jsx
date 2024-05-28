import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./theme";
import { RouterProvider } from "react-router-dom";
import Router from "./pages/routing";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>
);
