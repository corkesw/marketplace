import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Constants/UserContext";
import axios from 'axios';


const Basket = () => {
  const {user, basket, setBasket} = useContext(UserContext)
  const [currentTotal, setCurrentTotal] = useState(0)
  const [itemCount, setItemCount] = useState(0)
  
  return <section>
    <ul>
      {basket.map((item) => {
        setCurrentTotal(currentTotal + item.price)
        setItemCount(itemCount + 1)
        return <li><img src={item.img_url} alt={item.item_name} />{item.item_name} £{item.price / 100} </li>

      })}
    </ul>
    <p>Amount of items in basket: {itemCount} Total: £{currentTotal / 100}</p>
  </section>;
};

export default Basket;
