import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Shopping from "./pages/Shopping/Shopping";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App>
          <Home></Home>
        </App>
      ),
    },
    {
      path: "items",
      element: (
        <App>
          <Shopping></Shopping>
        </App>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
