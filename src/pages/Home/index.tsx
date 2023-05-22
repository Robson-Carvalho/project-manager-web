import { Header } from "../../components/Header";
import { Container, Main, Hero, Texts } from "./styles";
import { Footer } from "../../components/Footer";

import illustrationHome from "../../assets/illustration-home.svg";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Hero>
          <Texts>
            <h2>
              Seu <br /> gerenciador de <br /> projetos.
            </h2>
            <p>
              Com o Project Manager, gerenciar projetos se torna uma tarefa
              simples e eficiente, permitindo que você foque no que realmente
              importa: alcançar seus objetivos.
            </p>
          </Texts>

          <img src={illustrationHome} alt="illustration login" />
        </Hero>
      </Main>
      <Footer />
    </Container>
  );
};
