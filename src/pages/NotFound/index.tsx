import { Container, Hero, Button } from "./styles";

import illustration_404 from "../../assets/illustration-404.svg";
import { BiArrowBack } from "react-icons/bi";

export const NotFound = () => {
  return (
    <Container>
      <Hero>
        <img src={illustration_404} alt="Image not found erro 404" />
        <Button to="/">
          <BiArrowBack size={24} />
          Volta para tela inicial
        </Button>
      </Hero>
    </Container>
  );
};
