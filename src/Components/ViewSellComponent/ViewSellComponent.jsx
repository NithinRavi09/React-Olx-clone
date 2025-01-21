import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../../../firebase/config";
import "./ViewSellComponent.css";

function ViewSellComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const firestore = getFirestore(app);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(firestore, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.error("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, firestore]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product.price}</p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <span>{new Date(product.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="contactDetails">
          <p>Seller Details</p>
          <p>{product.sellerName || "N/A"}</p>
          <p>{product.sellerContact || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewSellComponent;
