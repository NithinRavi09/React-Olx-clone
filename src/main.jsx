import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { FirebaseContext } from "../store/FirebaseContext.jsx";
import firebase from "../firebase/config.js";
import Context from "../store/FirebaseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  </StrictMode>
);
