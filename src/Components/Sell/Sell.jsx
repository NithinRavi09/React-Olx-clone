import React from "react";
import Heart from "../../assets/Heart";
import "./Sell.css";
import { useNavigate } from "react-router-dom";

function Sell({ recommendations }) {
    const navigate = useNavigate()
    const handleCardClick = (id) => {
        navigate(`/viewSell/${id}`);
    };
  
    return (
      <div className="postParentDiv">
        <div className="recommendations">
          <div className="heading">
            <span>Fresh recommendations</span>
          </div>
          <div className="cards">
            {recommendations.length > 0 ? (
              recommendations.map((item) => (
                <div
                  key={item.id}
                  className="card"
                  onClick={() => handleCardClick(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="favorite">
                    <Heart />
                  </div>
                  <div className="image">
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {item.price}</p>
                    <span className="kilometer">{item.category}</span>
                    <p className="name">{item.name}</p>
                  </div>
                  <div className="date">
                    <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default Sell;
  