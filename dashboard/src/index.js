import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
