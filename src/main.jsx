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

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/send-money",
        element: <SendMoney />,
      },
      {
        path: "/cash-in",
        element: <CashIn />,
      },
      {
        path: "/cash-out",
        element: <CashOut />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
