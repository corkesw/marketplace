import React from 'react';
import styled, {css} from 'styled-components'

const StyledSearch = styled.form`
grid-area: search;
width: 100%;
`;

const Search = ({setNavVisible}) => {
    return (
        <StyledSearch>
            <button type="button" onClick={() => {
                setNavVisible(true)
            }}>=</button>
            <input type="text" placeholder="What are you looking for"/>
            <button type="submit">Search</button>
        </StyledSearch>
    );
};

export default Search;