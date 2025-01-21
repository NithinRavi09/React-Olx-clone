import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth"; 
import { useNavigate } from "react-router-dom"; 
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../../store/FirebaseContext";

function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate(); 

  const auth = getAuth(firebase); 

  const handleLogout = () => {
    signOut(auth) 
      .then(() => {
        console.log("User signed out successfully.");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handleNavigation = () => {
    navigate("/create");
  };
  const handlelogoclick = () => {
    navigate("/");
  };
  const handleloginclick = () => {
    navigate("login");
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div
          className="brandName"
          onClick={handlelogoclick}
          style={{ cursor: "pointer" }}
        >
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>
            {user ? (
              `Welcome ${user.displayName}`
            ) : (
              <span onClick={handleloginclick} style={{ cursor: "pointer" }}>
                "Login"
              </span>
            )}
          </span>
          <hr />
        </div>
        {user && (
          <span onClick={handleLogout} style={{ cursor: "pointer" }}>
            Logout
          </span>
        )}

        {/* Logout action */}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={handleNavigation} style={{ cursor: "pointer" }}>
              SELL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
