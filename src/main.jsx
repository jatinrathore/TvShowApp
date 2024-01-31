import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx";
import { DataContextWrapper } from "./hooks/useData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextWrapper>
    <RouterProvider router={router} />
  </DataContextWrapper>
);
