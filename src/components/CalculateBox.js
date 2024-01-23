import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Total = styled.div`
        display:flex;
        justify-content: space-between;
        margin-bottom: 0.4rem
`

const Box = styled.div`
    position: fixed;
    bottom: 0px;
    max-width: 28rem;
    height: 10rem;
    box-shadow: 1px 1px 10px 1px #ccc;
    padding: 0.4rem;
    margin-left: -0.4rem;
`
const Pay = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    input[type=number]{
        border:none;
        border-bottom:1px solid #000;
        font-weight:bold;
        &:focus{
            outline:none;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button{
            -webkit-appearance:none;
        }
    }
`
const Change = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom: 0.6rem;
`
const BtnBox = styled.div`
    display:flex;
    justify-content: space-between
`



const CalculateBox = () => {
    return (
       <Box>
            <Total>
                <h4>Total</h4>
                <p>23000</p>
            </Total>
            <Pay>
                <p>Jumlah Bayar</p>
                <input type="number" name="bayar" id="bayar" />
            </Pay>
            <Change>
                <p>Kembalian</p>
                <p>15000</p>
            </Change>
            <BtnBox>
                <Button  />
                <Button primary />
            </BtnBox>
       </Box>
    );
}

export default CalculateBox;
