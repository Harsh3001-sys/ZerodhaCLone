import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { LivePriceProvider } from "./context/LivePriceContext";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LivePriceProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
      />
    </BrowserRouter>
  </LivePriceProvider>
);