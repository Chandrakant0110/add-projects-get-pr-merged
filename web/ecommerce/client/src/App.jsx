import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyProfile from "./pages/MyProfile";
import axios from "./axios";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";

export const MyContext = createContext();

function App() {
  const [itemData, setItemData] = useState([]);
  const [userData, setUserData] = useState({});

  const getApiData = async () => {
    try {
      const res = await axios.get("/products");
      setItemData(res.data);
    } catch (error) {
      console.log("There is error", error);
    }
  };

  const contexValue = {
    itemData,
    userData,
    setUserData,
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <MyContext.Provider value={contexValue}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="order" element={<Orders />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
