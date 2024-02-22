import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css"
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import App from "./Router/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{backgroundColor: "#C4C4C4", padding:'20px'}}>
     <Provider store={store}>
    <App />
  </Provider>
  </div>
 
);
