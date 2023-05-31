import { styled } from "styled-components";

export const Container = styled.main`
  width: 100vw;
  padding: 0 24px;
`;

export const Hero = styled.section`
  max-width: 1218px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

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

  @media (max-width: 932px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  max-width: 480px;
  width: 100%;
  padding: 48px 0;

  p {
    font-size: ${({ theme }) => theme.font.sizes.big};
    font-weight: ${({ theme }) => theme.font.extraBold};
    margin-bottom: 32px;

    @media (max-width: 932px) {
      font-size: ${({ theme }) => theme.font.sizes.xxlarge};

      @media (max-width: 460px) {
        font-size: ${({ theme }) => theme.font.sizes.xlarge};
      }
    }
  }

  span {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: ${({ theme }) => theme.font.mediun};
    color: ${({ theme }) => theme.colors.gray};

    @media (max-width: 460px) {
      font-size: ${({ theme }) => theme.font.sizes.small};
    }
  }
`;
