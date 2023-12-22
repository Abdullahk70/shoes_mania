import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import {GoogleOAuthProvider} from "@react-oauth/google"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="260016522072-076qmd17ouf7ellhjjq44f716nd0gbof.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
);
