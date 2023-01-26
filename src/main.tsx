import React from "react";
import ReactDOM from "react-dom";

// import { ReactQueryDevtools } from "react-query/devtools";
// import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

import "./styles/index.css";
import { AuthContextProvider } from "@context/AuthContext/AuthContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
