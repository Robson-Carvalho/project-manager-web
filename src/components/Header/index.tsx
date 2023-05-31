import { Container, Nav, Logo, Menu, LinkLogin, LinkSignUp } from "./styles";

import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Container>
      <Nav>
        <Logo to="/">
          <img src={logo} alt="Logo" />
          <h1>Project Manager</h1>
        </Logo>

        <Menu>
          <li>
            <LinkLogin to="/login">Login</LinkLogin>
          </li>
          <li>
            <LinkSignUp to="/signIn">Sign Up</LinkSignUp>
          </li>
        </Menu>
      </Nav>
    </Container>
  );
};
