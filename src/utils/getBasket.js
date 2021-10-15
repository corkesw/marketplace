import axios from "axios";
import { UserContext } from "../Constants/UserContext";
import { useContext } from "react";

export const getBasket = (user) => {
  axios({
    method: "get",
    url: `https://nc-marketplace.herokuapp.com/api/users/${user}/basket`,
  }).then((res) => {
    console.log(user, res.data.items, 'in the js func')
    return res.data.items;
  });
};

export const getBasketPrice = (basket) => {
  console.log(basket, "current basket");
  let currentTotal = 0;

  basket.forEach((item) => {
    currentTotal += item.price;
  });

  return currentTotal;
};
