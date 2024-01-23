import React from 'react';
import styled from 'styled-components';


const MyButton = styled.button`
    height:1.7rem;
    width: 6rem,
    border:none;
    padding: 0.2rem 0.5rem;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`
const PrimaryButton = styled(MyButton)`
    background: ${props=>props.theme.primary};
`
const WarningButton = styled(MyButton)`
    background: ${props=>props.theme.tertiary}
`

const Button = ({primary}) => {
    if(primary){
        return (
           <PrimaryButton>Selesai</PrimaryButton>
        );
    }else{
        return (
            <WarningButton>Cancel</WarningButton>
        );
    }
   
}

export default Button;
