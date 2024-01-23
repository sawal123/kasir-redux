import React from 'react';
import styled from 'styled-components';

const CounterStyle = styled.div`
display:flex;
width: 1rem;
background: ${props=>props.theme.secondary};
color: #fff;
height: 1rem;
border-radius: 100px;
justify-content: center;
align-items:center;
padding: 0;
cursor: pointer;
`

const Counter = ({inc, dec}) => {
   if(inc){
    return <CounterStyle>+</CounterStyle>
   }
   else{
    return <CounterStyle>-</CounterStyle>
   }
}

export default Counter;
