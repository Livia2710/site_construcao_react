import { useState, useEffect } from "react";
import styled from "styled-components";
import Headfone from "../Assets/Imagens/Headfone_preto.png";
import Notebook from "../Assets/Imagens/Notebook.png";
import Celulares from "../Assets/Imagens/celulares.png"


const products = [
  {
    id: 1,
    name: "Headphone JBL",
    description: "Experimente um som imersivo com cancelamento de ruído.",
    image: Headfone
  },
  {
    id: 2,
    name: "Notebook Gamer",
    description: "Alta performance para jogos e produtividade.",
    image: Notebook
  },
  {
    id: 3,
    name: "Smartwatch Pro",
    description: "Tecnologia e elegância no seu pulso.",
    image: Celulares
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % products.length);
        setFade(true);
      }, 300);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Content fade={fade}>
        <Title>{products[current].name}</Title>
        <Description>{products[current].description}</Description>
        <Button>Conheça nossos produtos</Button>
      </Content>

      <ImageWrapper fade={fade}>
        <ProductImage 
          src={products[current].image} 
          alt={products[current].name} 
        />
      </ImageWrapper>
    </Container>
  );
};

export default Slider;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0D0D0D;
  width: 100%;
  margin-top: 5rem;
`;

const Content = styled.div`

  opacity: ${({ fade }) => (fade ? 1 : 0)};
  transform: ${({ fade }) => (fade ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.4s ease;
    padding: 100px ;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
  font-family: 'Space Grotesk', sans-serif;
  color: #ffff;
`;

const Description = styled.p`
  font-size: 18px;
  color: #A1A1AA;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background: #7C3AED;
  border: none;
  padding: 12px 24px;
  color: white;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: #6D28D9;
  }
`;

const ImageWrapper = styled.div`
  opacity: ${({ fade }) => (fade ? 1 : 0)};
  transform: ${({ fade }) => (fade ? "translateX(0)" : "translateX(20px)")};
  transition: all 0.4s ease;
`;

const ProductImage = styled.img`
  width: 450px;
  height: 450px;
  object-fit: contain;
`;
