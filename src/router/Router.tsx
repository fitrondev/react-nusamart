import AdminLayout from "@/layouts/AdminLayout";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <div>Categories</div>,
      },
      {
        path: "/shop",
        element: <div>Shop</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <div>Hello World</div>,
      },
    ],
  },
]);

export default router;
