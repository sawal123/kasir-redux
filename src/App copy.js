import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import logo from './logo.svg'


const theme={
  primary: "red",
  secondary: "blue"
}


const Container =styled.div`
  text-align: center;
`
const Head = styled.h1
`
  color:red;
`
const Brand = styled.img
`
  height: 10vh;
  margin-top: 2rem
`

const Wrapper =styled.div`
  background-color: yellow;
  &.test{
    background:orange
  }
`

const Button = styled.button`
  color: #fff;
  background: ${props => props.primary ? "blue" : "green"};
  padding: 0.5rem 1rem;
  border: none;
  margin: 1rem;
  border-radius:10px
`
const TomatoButton = styled(Button)
`
  background:tomato
`

const AnotherButton =styled.button`
  ${props=>{
    switch(props.variant){
      case "primary":
        return `background: blue`
      case "success":
        return `background: green`
      default:
        return `background: grey`
    }
  }}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Brand src={logo} />
      <Head>Tes Aapps</Head>
      <Button>Tes</Button>
      <Button primary>Tes</Button>
      <TomatoButton>Tes</TomatoButton>
      <Wrapper className='test'>Tesdsa</Wrapper>
      <AnotherButton variant="primary">Button</AnotherButton>
    </Container>
    </ThemeProvider>
  );
}

export default App;
