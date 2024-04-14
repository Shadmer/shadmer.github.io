import { Navigate, useRoutes } from "react-router-dom";
import { EntryPage } from "./pages/EntryPage";

export const App = () =>
  useRoutes([
    { path: "/", element: <EntryPage /> },
    { path: "/inner", element: <h1>Внутренняя страницп</h1> },
    { path: "*", element: <Navigate to="/" /> },
  ]);
