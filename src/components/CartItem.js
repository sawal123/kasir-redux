import React, {useState} from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { inc, dec, removeFromCart } from "../store/actions/product";
import { useDispatch } from "react-redux";


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

const CartItem = ({item}) => {
    const [count , setCount] = useState(1)
    const dispatch = useDispatch()
    const increment = id =>{
      setCount(count + 1)
      dispatch(inc(item.id))
      
    }
    const decrement =id=>{
      setCount(count -1)
      if(count > 1){
        dispatch(dec(item.id))
      }
      else if(count === 1){
        dispatch(removeFromCart(id))
      }
    }
  return (
    <Cart>
      <ItemName>{item.name}</ItemName>
      <CountCountainer>
        <Counter inc={()=>increment(item.id)} />
        <CounterTotal>{count}</CounterTotal>
        <Counter dec={()=>decrement(item.id)} />
      </CountCountainer>
      <Price>{item.price}</Price>
    </Cart>
  );
};

export default CartItem;
