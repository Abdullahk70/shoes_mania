import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
