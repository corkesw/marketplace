import React from 'react';
import './Nav.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const StyledNav = styled.nav`
z-index: 2;
grid-area: header;
`;


const Nav = ({navVisible, setNavVisible}) => {


   
    console.log(navVisible, "nav-status")


    return (

        <StyledNav className={navVisible? 'nav-vis' : 'nav-hidden'}>
            <ul className="nav-text">
                <li><button onClick={()=>{setNavVisible(false)}}>X</button></li>
                <li>Home</li>
                <li><Link to='/categories'>Categories</Link></li>
                <li>Basket</li>
                <li>My Orders</li>
                <li>Sell an item</li>
                <li>Account details</li>
                <li>Logout</li>
            </ul>
        </StyledNav>
    );
};

export default Nav;