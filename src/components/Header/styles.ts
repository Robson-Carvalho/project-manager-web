import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.primary};
  padding: 0 24px;
`;

export const Nav = styled.nav`
  max-width: 1216px;
  width: 100%;
  height: 72px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.white};
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 24px;

  li {
    list-style: none;
  }
`;

export const StyleLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  color: ${({ theme }) => theme.titleColor};

  transition: 0.2s ease;
`;

export const LinkLogin = styled(StyleLink)`
  color: ${({ theme }) => theme.white};
  &:hover {
    filter: brightness(0.8);
  }
`;

export const LinkSignIn = styled(StyleLink)`
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.titleColor};

  &:hover {
    filter: brightness(0.9);
  }
`;
