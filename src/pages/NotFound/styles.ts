import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  padding: 0 24px;
`;

export const Hero = styled.section`
  max-width: 1218px;
  margin: 0 auto;
  padding: 48px 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  img {
    @media (max-width: 1132px) {
      width: 505px;

      @media (max-width: 1032px) {
        width: 405px;

        @media (max-width: 460px) {
          width: 305px;
        }
      }
    }
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  padding: 12px 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.border.radius};
  color: ${({ theme }) => theme.colors.white};
`;
