import styled from "styled-components";
import { Link } from "react-router-dom";

// Componente funcional Header
const Header = () => {
  return(
    <Container>
    
      {/* Menu de Navegação */}
      <NavMenu>
          
      {/* Logo */}
      <Logo to="/">
        <img src="/images/Tree.png" alt="Logo" />
      </Logo>


        <StyledLink to="/">
          <span>Home</span>
        </StyledLink>

        <StyledLink to="/produtos">
          <span>Produtos</span>
        </StyledLink>
      </NavMenu>


      {/* Botão de login */}
      <Login to="/login">Login</Login>

    </Container>
  );
};



// Styled-Components

const Container = styled.div`
  position: fixed;
  background-color: #0D0D0D;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  z-index: 1000;
`;

// Logo agora é Link
const Logo = styled(Link)`
  width: 80px;
  display: flex;
  align-items: center;

  img {
    width: 90%;
    border-radius: 50px;
  }
`;



// Link estilizado
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 1px;


  span {
    color: rgb(249, 249, 249);
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.08;
    padding: 1px 0;
    white-space: nowrap;
    position: relative;

    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0 0 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
      visibility: hidden;
    }
  }

  &:hover span:before {
    transform: scaleX(1);
    visibility: visible;
    opacity: 1;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  margin-left: 30px;

  @media (max-width: 548px) {
    display: none;
  }
`;

// Login também como Link
const Login = styled(Link)`
  color: #ffffff;
  background-color: #0D0D0D;
  padding: 10px 16px;
  margin-right: 45px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: #f9f9f9;
    color: #0D0D0D;
    border-color: transparent;
  }
`;

export default Header;
