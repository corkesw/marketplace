import React from 'react';
import './Nav.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';


const StyledNav = styled.nav`
z-index: 2;
grid-area: header;
background-color: #55828B;

`;


const Nav = ({navVisible, setNavVisible}) => {

    const history = useHistory()
   
    console.log(navVisible, "nav-status")


    return (

        <StyledNav className={navVisible? 'nav-vis' : 'nav-hidden'}>
            <ul className="nav-text">
                <li><button onClick={()=>{setNavVisible(false)}}>X</button></li>
                <li><button onClick={()=>{
                    setNavVisible(false)
                    history.push('/')
                    }}>Home</button></li>
                <li><button onClick={()=>{
                    setNavVisible(false)
                    history.push('/categories')
                    }}>Categories</button></li>
                <li><button onClick={()=>{
                    setNavVisible(false)
                    history.push('./basket')
                    }}>Basket</button></li>
                <li>My Orders</li>
                <li>Sell an item</li>
                <li><button onClick={()=>{
                    setNavVisible(false)
                    history.push('/account')
                    }}>Account details</button></li>
                <li>Logout</li>
            </ul>
        </StyledNav>
    );
};

export default Nav;