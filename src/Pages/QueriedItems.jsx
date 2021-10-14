import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const QueriedItems = () => {
  const { searchTerm } = useParams();
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    console.log(searchTerm, "searchTerm");
    const currentUrl = `https://nc-marketplace.herokuapp.com/api/items?${searchTerm}`;
    console.log(currentUrl);
    axios.get(currentUrl).then((res) => {
      console.log(res.data.items);

      setItemList(res.data.items);
    });
  }, [searchTerm]);
  return (
    <ul>
      {itemList.map((item) => {
        return (
          <li>
            {" "}
            <img
              src={`${item.img_url}`}
              width="100px"
              height="100px"
              alt={`${item.item_name}`}
            />{" "}
            {item.item_name} £{item.price / 100}
          </li>
        );
      })}
    </ul>
  );
};

export default QueriedItems;
