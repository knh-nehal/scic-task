import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SendMoney from "./page/SendMoney";
import CashIn from './page/CashIn';
import CashOut from './page/CashOut';
import History from './page/History';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
