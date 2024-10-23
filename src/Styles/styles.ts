import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    primary: "#3498db",
    secondary: "#f0c040", //#2ecc71
    background: "#f5f6fa",
    text: "#333",
    border: "#ddd",
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${cores.background}; /* Fundo claro */
        color: ${cores.text};
        font-family: 'Libre Baskerville', serif;
        line-height: 1.6; /* Melhoria na legibilidade */
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(0, 0, 0, 0.1); 
        min-height: 100vh;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: ${cores.primary};
        transition: color 0.3s;

        &:hover {
            color: ${cores.secondary};
        }
    }

    /* Estilo para um container centralizado */
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-family: 'Libre Baskerville', serif;
    font-size: 3.5em;
    color: #333;
    padding-bottom: 40px;
`;

export const Title2 = styled.h2`
    font-size: 2.5rem;
    font-family: 'Libre Baskerville', serif;
    color: #333;
`


export const Logo = styled.a`
  font-size: 38px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  text-decoration: none;
  color: inherit; /* Mantém a cor do logo */
`;

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