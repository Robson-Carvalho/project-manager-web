import { Container, Hero, Content } from "./styles";

import illustrationHome from "../../assets/illustration-home.svg";

export const Home = () => {
  return (
    <Container>
      <Hero>
        <Content>
          <p>
            Seu <br /> gerenciador de <br /> projetos.
          </p>
          <span>
            Com o Project Manager, gerenciar projetos <br /> se torna uma tarefa
            simples e eficiente, <br /> permitindo que você foque no que <br />{" "}
            realmente importa: alcançar seus <br /> objetivos.{" "}
          </span>
        </Content>

        <img src={illustrationHome} alt="illustration" />
      </Hero>
    </Container>
  );
};
