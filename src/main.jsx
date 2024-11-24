import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import User from "./Pages/User";
import rootReducers from "./Reducers/Index.js";


const store = configureStore({
  reducer: rootReducers,
  devTools: true,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "user", element: <User /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
