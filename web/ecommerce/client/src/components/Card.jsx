/* eslint-disable react/prop-types */

import { IoCart } from "react-icons/io5";
import { FaBoltLightning } from "react-icons/fa6";
import styles from "./Card.module.css";
import Buttons from "./Buttons";
import { useState } from "react";
import { MyContext } from "../App";
import { useContext } from "react";
import axios from "axios";

function Cards({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { userData } = useContext(MyContext);

  async function handleAddToCart(item) {
    try {
      const res = await axios.post("http://localhost:5000/cart", {
        selectCard: item,
        userData,
        quantity,
      });
      if (res.status === 200) {
        setQuantity(1);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error);
      } else {
        console.log("Unexpected error");
      }
    }
  }

  return (
    <section>
      <div className={`${styles.section_card}`}>
        <div className="section-image">
          <img src={item.image} alt="" />
        </div>
        <div className={`${styles.section_content}`}>
          <p>{item.title}</p>
          <span>Price : ${item.price}</span>
          <div className={`${styles.section_quantity}`}>
            <Buttons
              onClick={() =>
                setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1))
              }
            >
              -
            </Buttons>
            <span style={{ margin: "0 1rem" }}>{quantity}</span>
            <Buttons onClick={() => setQuantity((quantity) => quantity + 1)}>
              +
            </Buttons>
          </div>
          <div className={`${styles.section_actions}`}>
            <Buttons onClick={() => handleAddToCart(item)}>
              <div className={styles.button_action}>
                <IoCart />
                <span> ADD TO CART</span>
              </div>
            </Buttons>
            <Buttons>
              <div className={styles.button_action}>
                <FaBoltLightning />
                <span> BUY NOW</span>
              </div>
            </Buttons>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
