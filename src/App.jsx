import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { AuthContext, FirebaseContext } from "../store/FirebaseContext";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import ViewSell from "./Pages/ViewSell";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const auth = getAuth(firebase); 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  },[]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/viewSell/:id" element={<ViewSell />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
