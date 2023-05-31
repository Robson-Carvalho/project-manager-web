import { styled } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 16px 0;

  p {
    text-align: center;

    font-weight: ${({ theme }) => theme.font.normal};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: 480px) {
      font-weight: ${({ theme }) => theme.font.normal};
      font-size: ${({ theme }) => theme.font.sizes.small};
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 480px) {
    padding: 24px 0;
  }
`;
