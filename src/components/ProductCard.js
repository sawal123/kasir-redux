import React from "react";
import styled from "styled-components";


const Card = styled.div`
    width:17%;
    height:12rem;
    cursor:ponter;
`
const CardImg = styled.img`
 width: 100%;
 height:50%;
 border-radius:10px;
 object-fit: cover
`
const NamePrice = styled.div`
    display:flex;
    justify-content: space-between
`

const ProductCard =({item})=>{
    return(
    <Card>
        <CardImg src={item.image} alt="gambar" />
        <NamePrice>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </NamePrice>

    </Card>
    )
}

export default ProductCard