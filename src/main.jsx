import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";  // Global styles
// import ScrollToTop from './src/components/ScrollToTop';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
    {/* <ScrollToTop/> */}
      <App />
    </HashRouter>
  </React.StrictMode>
);