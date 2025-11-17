import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import NotFound from "../components/NotFound/NotFound";
import ProtectedRoute from "./adminGuard";
import AdminLayout from "../layouts/AdminLayout";
import LandingPage from "../pages/LandingPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
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
