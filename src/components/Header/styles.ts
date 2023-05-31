import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 24px;
`;

export const Nav = styled.nav`
  max-width: 1218px;
  width: 100%;
  height: 64px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 38px;

    @media (max-width: 480px) {
      width: 32px;
    }
  }

  h1 {
    font-weight: ${({ theme }) => theme.font.semiBold};
    font-size: ${({ theme }) => theme.font.sizes.large};
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 480px) {
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;

  li {
    list-style: none;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const StyleLink = styled(Link)`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.mediun};
  color: ${({ theme }) => theme.colors.white};

  text-decoration: none;

  transition: 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const LinkLogin = styled(StyleLink)`
  color: ${({ theme }) => theme.bgColor};
  &:hover {
    filter: brightness(0.8);
  }
`;

export const LinkSignUp = styled(StyleLink)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.black};
  padding: 8px 16px;

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;
