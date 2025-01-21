import React from "react";

import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Posts from "../Components/Posts/Posts";
import Footer from "../Components/Footer/Footer";
import ParentComponent from "../Components/Sell/ParantComponent";
const recommendationsData = [
  {
    id: 1,
    image: "../../../Images/11.jpg",
    price: 4000,
    category: "Gym Equipment",
    name: "40KG Dumbell",
    date: "15/5/2024",
  },
  {
    id: 2,
    image: "../../../Images/12.jpg",
    price: 250000,
    category: "Bike",
    name: "YAMAHA R15 V4",
    date: "10/5/2024",
  },
  {
    id: 3,
    image: "../../../Images/13.jpg",
    price: 1000,
    category: "Shoes",
    name: "Pink Running Shoes",
    date: "25/7/2024",
  },
  {
    id: 4,
    image: "../../../Images/14.jpg",
    price: 30000,
    category: "Phone",
    name: "Iphone 11",
    date: "02/2/2024",
  },
  {
    id: 5,
    image: "../../../Images/15.jpg",
    price: 500,
    category: "Tshirt",
    name: "Blue Shirt",
    date: "31/8/2024",
  },
  {
    id: 6,
    image: "../../../Images/16.jpg",
    price: 35000,
    category: "Phone",
    name: "Blue Iphone 12",
    date: "23/8/2024",
  },
  {
    id: 7,
    image: "../../../Images/17.jpg",
    price: 7000,
    category: "Hoodies",
    name: "Gray color Hoodie",
    date: "23/6/2024",
  },
  {
    id: 8,
    image: "../../../Images/18.jpg",
    price: 4000,
    category: "Shoes",
    name: "Brown Shoe",
    date: "11/7/2024",
  },
];

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <ParentComponent/>
      <Posts recommendations={recommendationsData} />
      <Footer />
    </div>
  );
}

export default Home;
