import { Container, Nav, Logo, Links, LinkLogin, LinkSignIn } from "./styles";

import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Container>
      <Nav>
        <Logo to="/">
          <img src={logo} alt="" />
          <h1>Project Manager</h1>
        </Logo>

        <Links>
          <li>
            <LinkLogin to="/login">Login</LinkLogin>
          </li>
          <li>
            <LinkSignIn to="/signIn">Sign In</LinkSignIn>
          </li>
        </Links>
      </Nav>
    </Container>
  );
};
