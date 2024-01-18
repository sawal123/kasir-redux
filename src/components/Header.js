import React from "react";
import styled from "styled-components";

const Head = styled.div`
    height: 8;
    display: flex;
    justify-content:center;
    justify-items:center;
    background: ${props => props.theme.primary};
    color: ${props=>props.theme.light}
`
const Header =()=>{
    return(
        <Head>
            <h1>KASIR</h1>
        </Head>
    )
}

export default Header