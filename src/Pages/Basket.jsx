import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Constants/UserContext";
import axios from "axios";

const Basket = () => {
  const { basket, basketPrice } = useContext(UserContext);

  // const basketLength = basket.length;

  return (
    <>
      {console.log(basket)}

      {basketPrice === 0 ? (
        <p>No Items Found... yet</p>
      ) : (
        <section>
          <ul>
            {basket.map((item) => {
              // setItemCount((itemCount) => itemCount + 1);
              return (
                <li>
                  <img src={item.img_url} alt={item.item_name} width="120px" />
                  {item.item_name} £{item.price / 100}{" "}
                </li>
              );
            })}
          </ul>
          {/* <p>
            Amount of items in basket: {basketLength} Total: £
            {basketPrice / 100}
          </p> */}
        </section>
      )}
    </>
  );
};

export default Basket;
