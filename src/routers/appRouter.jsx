import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import NotFound from "../components/NotFound/NotFound";
import ProtectedRoute from "./adminGuard";
import AdminLayout from "../layouts/AdminLayout";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-in",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: (
      <ProtectedRoute requiredRole="Admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [],
  },
]);
