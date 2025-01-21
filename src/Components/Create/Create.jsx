import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { FirebaseContext, AuthContext } from "../../../store/FirebaseContext";
import axios from "axios"; 
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const firestore = getFirestore(firebase);

  const handleSubmit = async () => {
    if (!name || !category || !price || !image) {
      alert("Please fill all the fields and upload an image.");
      return;
    }
  
    setLoading(true);
    try {
     
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "React-olx-clone");
      formData.append("cloud_name", "dj4yg18ef");
  
      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dj4yg18ef/image/upload",
        formData
      );
      const imageUrl = cloudinaryResponse.data.secure_url;
  
      const productData = {
        name,
        category,
        price,
        imageUrl,
        userId: user.uid,
        createdAt: new Date().toISOString(),
      };
  
      await addDoc(collection(firestore, "products"), productData);
  
      alert("Product uploaded successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <label htmlFor="name">Name</label>
        <br />
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="Name"
        />
        <br />
        <label htmlFor="category">Category</label>
        <br />
        <input
          className="input"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          name="Category"
        />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input
          className="input"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="price"
          name="Price"
        />
        <br />
        <br />
        <img
          alt="Preview"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}
        />
        <br />
        <input onChange={handleImageChange} type="file" />
        <br />
        <button
          className="uploadBtn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload and Submit"}
        </button>
      </div>
    </Fragment>
  );
};

export default Create;
