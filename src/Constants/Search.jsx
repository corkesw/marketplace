import React from 'react';
import styled from 'styled-components'

const StyledSearch = styled.form`
grid-area: search;
width: 100%;`;

const Search = () => {
    return (
        <StyledSearch>
            <input type="text" placeholder="What are you looking for"/>
            <button type="submit">Search</button>
        </StyledSearch>
    );
};

export default Search;