import React from 'react'
import {Link, useParams} from "react-router-dom";
import styled from "styled-components"

const NavbarWrapper = styled.div`
    display: flex; 
    gap: 20px;  
    background: pink;
    justify-content: center; 
    align-items: center; 
    padding: 20px; 
`



export const Navbar = () => {

    let {productid} = useParams()

    return(
        <>
        <NavbarWrapper>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Products/:id"></Link>
        <Link to="/Products/*"></Link>
        </NavbarWrapper>
        </>
    )
}