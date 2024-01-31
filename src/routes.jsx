import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ShowGrid from "./components/ShowGrid";
import FilmDetail from "./pages/FilmDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <ShowGrid />,
      },
      {
        path: "/:id",
        element: <FilmDetail />,
      },
    ],
  },
]);

export default router;
