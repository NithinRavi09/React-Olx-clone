import React from "react";
import { useNavigate } from "react-router-dom";
import Heart from "../../assets/Heart";
import "./Post.css";

function Posts({ recommendations }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/view/${id}`); // Navigate to the view page with the item ID
  };

  return (
    <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {recommendations.map((item) => (
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
                <img src={item.image} alt={item.name} />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {item.price}</p>
                <span className="kilometer">{item.category}</span>
                <p className="name">{item.name}</p>
              </div>
              <div className="date">
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
