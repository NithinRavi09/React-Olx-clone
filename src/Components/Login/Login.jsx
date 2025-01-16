import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../../store/FirebaseContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../../olx-logo.png";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading screen
    try {
      const auth = getAuth(firebase); // Initialize authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("Login successful!");
      console.log("User logged in:", userCredential.user);

      navigate("/"); // Navigate to home page
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.error("Error logging in:", error.message);
    } finally {
      setLoading(false); // Hide loading screen
    }
  };

  if (loading) {
    // Render loading spinner or page
    return (
      <div className="loadingContainer">
        <div className="spinner"></div>
        <p>Loading, please wait...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a href="/signup">Signup</a>
      </div>
      <ToastContainer /> {/* Add ToastContainer */}
    </div>
  );
}

export default Login;
