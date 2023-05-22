import { styled } from "styled-components";

export const Container = styled.footer`
  padding: 16px 0;
  width: 100%;

  p {
    text-align: center;

    font-weight: 500;
    font-size: 16px;
    line-height: 17px;
    color: ${({ theme }) => theme.titleColor};

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.primary};
    }
  }
`;
