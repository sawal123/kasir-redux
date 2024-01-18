import React from "react";
import Header from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "./styled/theme";




const Container = styled.div`
display:flex;
width:100vh;
height:92vh
`;
const MenuContainer = styled.div`
  width:15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
`;
const ProductContainer = styled.div`
  width:60%
`;
const CartContainer = styled.div`
  width:25%
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Container>
          <MenuContainer>Menu</MenuContainer>
          <ProductContainer>Product</ProductContainer>
          <CartContainer>Cart</CartContainer>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
