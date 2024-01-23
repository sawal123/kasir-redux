import React from "react";
import Header from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "./styled/theme";
import ProductCard from "./components/ProductCard";
import CalculateBox from "./components/CalculateBox";
import ListMenu from "./components/ListMenu";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";


const Container = styled.div`
  display:flex;
  // width:100vw;
  height:92vh
`;
const MenuContainer = styled.div`
  width:15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
  border-right: 1px solid #f7f7f7;
`;
const ProductContainer = styled.div`
  width:60%;
  height: 100%;
  background: ${props => props.theme.light}
  border-left: 2px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  padding : 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
`;
const CartContainer = styled.div`
  width:23%;
  padding: 0.5rem 1rem ;
`;

const App = () => {
  const products = useSelector(state => state.product.products)
  // const carts = useSelector(state => state.product.carts)
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu/>
        </MenuContainer>
        <ProductContainer>
         {products.map(product=>
             <ProductCard key={product.id} item = {product} />
          )}
        </ProductContainer>
        <CartContainer>
          <CartItem />
          <CalculateBox />
        </CartContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
