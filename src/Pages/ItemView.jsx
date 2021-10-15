import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Constants/UserContext";
import { getBasket } from "../utils/getBasket";

const ItemView = ({ selectedItem }) => {
  const { user, setBasket } = useContext(UserContext);
  console.log(selectedItem);
  const item = selectedItem;
  return (
    <section>
      <img
        src={item.img_url}
        width="80%"
        height="auto"
        alt={item.item_name + Math.random()}
      />
      <h2>{item.item_name}</h2>
      <p>{item.description}</p>
      <p>£{item.price / 100}</p>
      <button
        onClick={() => {
          console.log(user);
          axios({
            method: "post",
            url: `https://nc-marketplace.herokuapp.com/api/users/${user}/basket`,
            data: { item_id: item.item_id },
          }).then((res) => {
            console.log(res.data);
            setBasket(() => {
              return getBasket(user);
            });
          });
        }}
      >
        Add to basket
      </button>
    </section>
  );
};

export default ItemView;
