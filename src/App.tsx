import { Navigate, useRoutes } from "react-router-dom";
import { EntryPage } from "@src/pages/EntryPage";
import { InnerPage } from "@src/pages/InnerPage";

export const App = () =>
  useRoutes([
    { path: "/", element: <EntryPage /> },
    { path: "/inner", element: <InnerPage /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);
