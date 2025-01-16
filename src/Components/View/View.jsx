import React from "react";
import { useParams } from "react-router-dom";
import "./View.css";

function View() {
  const { id } = useParams();

  // Mock data
  const mockData = [
    {
      id: 1,
      image: "/Images/1.jpg",
      price: 4000,
      category: "Gym Equipment",
      name: "40KG Dumbell",
      date: "15/5/2024",
      sellerName: "John Doe",
      sellerContact: "1234567890",
    },
    {
      id: 2,
      image: "/Images/2.jpg",
      price: 250000,
      category: "Bike",
      name: "YAMAHA R15 V4",
      date: "10/5/2024",
      sellerName: "Jane Smith",
      sellerContact: "9876543210",
    },
    {
      id: 3,
      image: "/Images/3.jpg",
      price: 1000,
      category: "Shoes",
      name: "Pink Running Shoes",
      date: "25/7/2024",
      sellerName: "Alice Johnson",
      sellerContact: "1231231234",
    },
    {
      id: 4,
      image: "/Images/4.jpg",
      price: 30000,
      category: "Phone",
      name: "iPhone 11",
      date: "02/2/2024",
      sellerName: "Bob Lee",
      sellerContact: "3213214321",
    },
    {
      id: 5,
      image: "/Images/5.jpg",
      price: 500,
      category: "Tshirt",
      name: "Blue Shirt",
      date: "31/8/2024",
      sellerName: "Mike Brown",
      sellerContact: "4564564567",
    },
    {
      id: 6,
      image: "/Images/6.jpg",
      price: 35000,
      category: "Phone",
      name: "Blue iPhone 12",
      date: "23/8/2024",
      sellerName: "Charlie Green",
      sellerContact: "7897897890",
    },
    {
      id: 7,
      image: "/Images/7.jpg",
      price: 7000,
      category: "Hoodies",
      name: "Gray Hoodie",
      date: "23/6/2024",
      sellerName: "Emma White",
      sellerContact: "4561237890",
    },
    {
      id: 8,
      image: "/Images/8.jpg",
      price: 4000,
      category: "Shoes",
      name: "Brown Shoes",
      date: "11/7/2024",
      sellerName: "David Black",
      sellerContact: "3216549870",
    },
  ];

  // Find the product using the ID from the URL
  const product = mockData.find((item) => item.id === Number(id));

  // If product not found
  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.price}</p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <span>{product.date}</span>
        </div>
        <div className="contactDetails">
          <p>Seller Details</p>
          <p>{product.sellerName}</p>
          <p>{product.sellerContact}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
