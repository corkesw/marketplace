import React from 'react';
import styled from 'styled-components'

const StyledNav = styled.nav`
z-index: 2;
grid-area: header;


,
.nav-text{
    font-size: 0.6rem;
}
${navVisible}
`;

const navT = {
    "background-color": "red",
    "position": "absolute",
    "width": "50vw",
    "height": "100vh",
    "top": "10vh"
    // left: -50vw;

}

const navF = {
    
        "background-color": "blue",
        "position": "absolute",
        "width": "50vw",
        "height": "100vh",
        "top": "10vh",
        // left: -25vw;
        // overflow: hidden;
}


const Nav = ({navVisible, setNavVisible}) => {


   
    console.log(navVisible, "nav-status")


    return (

        <StyledNav className={navVisible? 'navVis' : 'navHidden'}>
            <ul className="nav-text">
                <li><button onClick={setNavVisible('navT')}>X</button></li>
                <li><button onClick={setNavVisible('navF')}>Y</button></li>
                <li>Home</li>
                <li>Categories</li>
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