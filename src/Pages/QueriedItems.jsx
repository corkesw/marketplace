import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin: 5px;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledItem = styled.li`
  border: 1px solid black;
  border-radius: 5px;
  list-style: none;

  background-color: #4c934c;
  width: 100%;
  &:hover {
    text-decoration: none;
    color: white;
  }

  /* grid-template-areas: "image item-text price"; */
`;

const ItemDiv = styled.div`
  display: grid;
  grid-template-columns: 30% 50% 20%;
  grid-template-rows: 100%;
  align-items: center;
  &:link {
    text-decoration: none;
    color: white;
  }
`;

const ItemImg = styled.img`
  grid-row: 1;
  grid-column: 1;
`;

const ItemText = styled.p`
  grid-row: 1;
  grid-column: 2;
`;

const ItemPrice = styled.p`
  grid-row: 1;
  grid-column: 3;
`;

const QueriedItems = ({ setSelectedItem }) => {
  const { searchTerm } = useParams();
  const [itemList, setItemList] = useState([]);
  const history = useHistory();
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
    <StyledList>
      {itemList.map((item) => {
        return (
          <StyledItem
            onClick={() => {
              history.push(`/item/${item.item_id}`);
              setSelectedItem(item);
            }}
          >
            <Link to={`/item/${item.item_id}`}>
              <ItemDiv>
                {" "}
                <ItemImg
                  src={`${item.img_url}`}
                  width="100px"
                  height="100px"
                  alt={`${item.item_name}`}
                />{" "}
                <ItemText>{item.item_name}</ItemText>
                <ItemPrice>£{item.price / 100}</ItemPrice>
              </ItemDiv>
            </Link>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

export default QueriedItems;
