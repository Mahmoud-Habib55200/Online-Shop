import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tailwindcss/tailwind.css";
import firebaseApp from "./firebase.config"; // Import the initialized Firebase app

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>

        <App />
    </Provider>
  </React.StrictMode>
);
