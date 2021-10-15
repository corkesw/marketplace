import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { useHistory } from "react-router";


const ListButton = styled.button`
  margin-bottom: 5px;`
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    console.log("inside the useEffect");
    axios
      .get("https://nc-marketplace.herokuapp.com/api/categories")
      .then((res) => {
        setCategories(() => {
          return res.data.categories;
        });
        console.log(res.data.categories);
      });
  }, []);
  const history = useHistory()
  return (
    <section>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.category_name}>
              <ListButton onClick={ () => {
                history.push(`/items/category_name=${category.category_name}`)}
              }
              >
                {category.category_name}
              </ListButton>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
