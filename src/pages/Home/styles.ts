import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  width: 100%;
  padding: 0 24px;
  flex: 1;
`;

export const Hero = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 123px 0 152px 0;
`;

export const Texts = styled.h2`
  max-width: 499px;
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 88px;

  h2 {
    font-weight: 800;
    font-size: 64px;
    line-height: 80px;
    color: ${({ theme }) => theme.titleColor};
  }

  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 41px;
    color: ${({ theme }) => theme.textColor};
  }
`;
