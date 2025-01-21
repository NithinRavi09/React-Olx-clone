import React, { useEffect, useState } from "react";
import Sell from "./Sell";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../../firebase/config";

const ParentComponent = () => {
  const [recommendations, setRecommendations] = useState([]);
  const firestore = getFirestore(app);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(firestore, "products");
        const productSnapshot = await getDocs(productsCollection);
        const products = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecommendations(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [firestore]);

  return <Sell recommendations={recommendations} />;
};

export default ParentComponent;
