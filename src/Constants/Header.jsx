import React from 'react';
import styled from 'styled-components'
import {useContext} from 'react'
import { UserContext } from './UserContext';


const StyledHeader = styled.header`
    grid-area:header
`;

const Header = () => {
    const {user} = useContext(UserContext)
    return (

        <StyledHeader>
        <h1>General Store</h1>
        {user && <p>Current User: {user}</p>}
        </StyledHeader>
    );
};

export default Header;