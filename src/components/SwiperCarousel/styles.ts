import styled from "styled-components";

export const CarouselItem = styled.div`
  padding-bottom: 20px;
  padding: 10px;
  flex-shrink: 0;
  max-width: 300px; /* Largura mínima de cada item */
  margin-right: 15px; /* Espaçamento entre os itens */
  margin-left: 15px;
  margin-bottom: 40px;
  border: 2px solid transparent; /* Borda inicial invisível */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: border 0.3s ease; /* Suaviza a transição */
  &:hover {
      border: 2px solid #b2bec3;
  }

  p{
    margin-bottom: 10px;
  }
`;

export const ImageCarrossel = styled.img`
  width: 250px;
  height: 300px;
`;

// Contêiner personalizado para envolver o Swiper e aplicar estilos específicos
export const SwiperContainer = styled.div`
  text-align: center;
  width: 1180px;
  margin: 0 auto;
  .swiper {
    width: 100%;
    padding: 20px 0;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-button-next, .swiper-button-prev {
    color: #333; /* Cor dos botões de navegação */
  }
  
  .swiper-pagination-bullet {
    background: #ccc;
  }

  .swiper-pagination-bullet-active {
    background: #333;
  }
`;


