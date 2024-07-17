import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SendMoney from "./page/SendMoney";
import CashIn from "./page/CashIn";
import CashOut from "./page/CashOut";
import History from "./page/History";
import Login from "./page/Login";
import Register from "./page/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/send-money",
        element: (
          <PrivateRoute>
            <SendMoney />
          </PrivateRoute>
        ),
      },
      {
        path: "/cash-in",
        element: (
          <PrivateRoute>
            <CashIn />
          </PrivateRoute>
        ),
      },
      {
        path: "/cash-out",
        element: (
          <PrivateRoute>
            <CashOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/history",
        element: (
          <PrivateRoute>
            <History />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
