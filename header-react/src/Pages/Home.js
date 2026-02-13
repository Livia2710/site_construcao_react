import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import Slider from "../Components/Silder";
import Celular from "../Assets/Imagens/Celular_preto.png"
import Headfone from "../Assets/Imagens/Headfone_preto.png"
import Notebook from "../Assets/Imagens/Notebook.png"
import Smart from "../Assets/Imagens/Smartwatch_preto.png"

const categories = [
  { id: 1, title: "Celular", image: Celular, slug: "celular" },
  { id: 2, title: "Headphone", image: Headfone, slug: "headphone" },
  { id: 3, title: "Notebook", image: Notebook, slug: "notebook" },
  { id: 4, title: "Acessórios", image: Smart, slug: "acessorios" }
];


// Componente funcional Home
const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    navigate(`/produtos?categoria=${slug}`);
  };

  return(
    <>
    <Container>
    
      <Slider/>
      <CategoriesSection>
        {categories.map((item) => (
          <CategoryCard key={item.id} onClick={() => handleCategoryClick(item.slug)}>
            <CategoryImage src={item.image} alt={item.title}></CategoryImage>
            <CategoryTitle>{item.title}</CategoryTitle>
          </CategoryCard>
        ))}
      </CategoriesSection>
    </Container>
    </>

  );
};


// Container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CategoriesSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 10px 0px;
  width: 100%;
  background: #0D0D0D;
`;

const CategoryCard = styled.div`
  position: relative;
  width: 250px;
  height: 180px;
  background: #1A1A1A;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
  cursor: pointer;
  overflow: visible;
  transition: 0.3s ease;
  animation: ${fadeUp} 0.8s ease forwards;

  &:hover {
    transform: translateY(-10px);
    background: #222;
  }
`;

const CategoryImage = styled.img`
  position: absolute;
  top: -50px;
  width: 140px;
  object-fit: contain;
  z-index: 1;
  transition: 0.3s ease;
  filter: drop-shadow(0 10px 25px rgba(124, 58, 237, 0.4));

  ${CategoryCard}:hover & {
    transform: scale(1.08);
  }
`;

const CategoryTitle = styled.h3`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;


// Título principal
const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
`;





export default Home;