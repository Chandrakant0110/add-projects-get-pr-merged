/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./../components/Navbar";
import CardsList from "../components/CardsList";
import { useEffect } from "react";
import axios from "axios";
import { MyContext } from "../App";
import { useContext } from "react";

function Home() {
  const { setUserData } = useContext(MyContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setUserData(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <CardsList />
    </div>
  );
}

export default Home;
