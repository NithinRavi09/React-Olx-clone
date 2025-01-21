import React, { Fragment, useEffect, useContext } from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import { AuthContext, FirebaseContext } from "../../store/FirebaseContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(firebase);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
      } else {
        console.log("Logged Out");
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [firebase, navigate]);

  return (
    <Fragment>
      <Header />
      <Create />
    </Fragment>
  );
};

export default CreatePage;
