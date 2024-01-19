import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: <App />,
    },
    {
      path: "item/:id",
      element: <App />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
