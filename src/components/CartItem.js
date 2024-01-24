import React, {useState} from "react";
import styled from "styled-components";
import Counter from "./Counter";


const Cart = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  background: #fff;
  border-radius: 8px;
  margin: 0.5rem auto;
  padding: 0 0.3rem;
  box-shadow: 10px 9px 80px 0px rgba(0, 0, 0, 0.33);
`;
const ItemName = styled.div`
    width:40%;
    padding-left: 0.5rem
`;
const CountCountainer = styled.div`
    width:30%;
    display:flex;
    align-items:center;
    justify-content:center
`;

const CounterTotal = styled.div`
    margin: 0 0.3rem
`;
const Price = styled.div`
    width:30%;
    text-align:center;
`;

const CartItem = ({name, price}) => {
    const [count , setCount] = useState(1)
  return (
    <Cart>
      <ItemName>{name}</ItemName>
      <CountCountainer>
        <Counter inc />
        <CounterTotal>{count}</CounterTotal>
        <Counter desc />
      </CountCountainer>
      <Price>{price}</Price>
    </Cart>
  );
};

export default CartItem;
