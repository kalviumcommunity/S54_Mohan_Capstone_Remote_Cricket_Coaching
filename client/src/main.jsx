import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import ParentContext from "./Components/Student/ParentContext";
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ParentContext>
      <App />
    </ParentContext>
  </React.StrictMode>
);
