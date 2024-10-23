import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff; /* Cor de fundo do cabeçalho */
    position: fixed; /* Fixa o header na parte superior */
    top: 0; /* Fica na parte superior da janela */
    left: 0; /* Alinha à esquerda */
    right: 0; /* Alinha à direita */
    z-index: 1000; /* Garante que o header fique acima de outros elementos */
    background-color: rgba(255, 255, 255, 0.5); /* Fundo branco com transparência */
    backdrop-filter: blur(10px); /* Adiciona um efeito de desfoque ao fundo */
    transition: background-color 0.3s; /* Transição suave na mudança de cor */
`;

export const Logo = styled.img`
    height: 50px;
    font-size: 42px;
    color: #333;
`;

export const NavLinks = styled.nav`
    a {
        margin-left: 20px;
        text-decoration: none;
        color: #333;   
    }
`;

export const ArtistImage = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    border-radius: 10px; // Para um efeito de suavização
`;

export const Description = styled.div`
    text-align: center;
    margin: 20px;
    font-family: 'Poppins', sans-serif;
    color: #555;
    background: rgba(255, 255, 255, 0.8); /* Fundo semi-transparente */
    backdrop-filter: blur(10px); /* Efeito de desfoque */
    padding: 20px; /* Espaçamento interno */
    border-radius: 10px; /* Suavização das bordas */
`;

export const Quote = styled.blockquote`
    font-style: italic;
    color: #777;
    margin: 20px 0;
    font-family: 'Poppins', sans-serif;
`;

export const GalleryContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Para permitir que as imagens se ajustem */
    margin: 20px 0;
`;

export const Image = styled.div`
    width: 300px; /* Ajuste a largura conforme necessário */
    height: 300px; /* Ajuste a altura conforme necessário */
    object-fit: cover; /* Garante que a imagem preencha o espaço sem distorcer */
    margin: 10px; /* Espaçamento entre as imagens */
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    a {
        margin: 0 10px;
    }
`;

export const Icon = styled.img`
    width: 30px; /* Tamanho do ícone */
    height: 30px; /* Tamanho do ícone */
`;
export const Contact = styled.div`
  font-size: 1rem;
  color: #333;
  margin-top: 20px;
  text-align: center;
`;

export const ContactLink = styled.a`
  color: #0073e6;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;