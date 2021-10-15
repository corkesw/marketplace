import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const StyledSearch = styled.form`
  grid-area: search;
  width: 100%;
  display: grid;
  grid-template-areas: "menu bar button" ;
  height: 3rem;
  width: 90vw;
  margin: 0 auto;
  background-color: #53A548;
`;

const Search = ({ setNavVisible }) => {
  const history = useHistory();
  const [textInSearch, setTextInSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <StyledSearch
      onSubmit={(e) => {
        e.preventDefault();
        setSearchQuery(textInSearch);
        console.log(searchQuery);
        history.push(`/items/search=${textInSearch}`);
      }}
    >
      <button
        type="button"
        onClick={() => {
          setNavVisible(true);
        }}
      >
        =
      </button>
      <input
        value={textInSearch}
        onChange={(e) => {
          //   console.log(e.target.value);
          setTextInSearch(e.target.value);
        }}
        type="text"
        placeholder="What are you looking for"
      />
      <button type="submit">Search</button>
    </StyledSearch>
  );
};

export default Search;
