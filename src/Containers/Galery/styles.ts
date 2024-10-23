import styled from "styled-components";

export const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    transition: transform 0.3s ease;
    
    &:hover{
        transform: scale(1.1); 
    }
`

export const ContainerImage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px; 
    max-width: 1280px;
    margin: 0 auto 80px auto;
`

export const ContainerInfo = styled.div`
    display: flex;
    justify-content: center;
    h2 {
        80px
    }

    li {
        margin-top: 80px;
        display: flex;

        a {
            color: #000;
        }
    }

    img {
        display: block;
        margin-right: 20px;
    }
`

export const Card = styled.div`
  width: 300px; /* Ajuste para o tamanho desejado */
  height: auto;
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px; /* Bordas arredondadas */
  background-color: white; /* Cor de fundo */
  border: 2px solid transparent; /* Borda inicial invisível */
    transition: border 0.3s ease; /* Suaviza a transição */
    &:hover {
        border: 2px solid #b2bec3;
    }
`;


export const Price = styled.p`
  font-size: 1.2em;
  color: green; /* Cor do preço */
`;

export const ButtonLink = styled.a`
  padding: 10px 20px;
  background-color: #dfe6e9; /* Cor do botão */
  color: #333; /* Cor do texto do botão */
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;

  &:hover {
    background-color: #dfe4ea; /* Cor do botão ao passar o mouse */
    color: #000;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px auto 80px auto;
  width: 1220px;
  overflow: hidden; /* Esconde os elementos que saem da área do carrossel */

  p{
    margin: 10px 0;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align=items: center;
  margin: 0 auto;
  scroll-behavior: smooth; /* Efeito suave na rolagem */
  transition: transform 0.5s ease; /* Adiciona uma transição suave */
`;



export const Button = styled.button<{ disabled?: boolean }>`
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: #333;
  font-size: 24px; // Aumenta o tamanho do ícone
  z-index: 10; // Certifique-se de que os botões fiquem acima do carrossel
  transform: translateY(-50%); // Ajusta para o centro exato

  &:hover {
    color: ${({ disabled }) => (disabled ? '#ccc' : '#333')};
  }
`;
