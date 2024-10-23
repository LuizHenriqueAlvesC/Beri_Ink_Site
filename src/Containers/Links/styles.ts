import styled from 'styled-components';

export const LinksSectionContainer = styled.div`
    display: flex; /* Usando flexbox para alinhar os elementos */
    justify-content: space-around;
    align-items: flex-start; /* Alinha os itens ao topo *
    font-family: 'Libre Baskerville', serif;
    flex-wrap: wrap; /* Permite que os itens quebrem linha se necessário */
    background: linear-gradient(
        to right,
        rgba(196, 193, 193, 0.1),
        rgba(196, 193, 193, 0.1),
        rgba(300, 300, 300, 0.1)
    );
`;

export const TextContainer = styled.div`
    flex: 1; /* Permite que o texto ocupe uma proporção do espaço */
    max-width: 600px; /* Limita a largura do texto */
    margin-right: 20px; /* Espaçamento entre o texto e a galeria */
    margin-bottom: 80px;
`;

export const ExploreTitle = styled.h2`
    font-size: 3.5rem;
    margin-bottom: 10px;
    color: #333;
`;

export const Text = styled.p`
    font-size: 28px;
    margin: 10px 0;
    color: #555;
`;

export const GalleryContainer = styled.div`
    display: grid; /* Usando grid para layout das imagens */
    grid-template-columns: repeat(3, 1fr); /* Duas fileiras com 3 imagens */
    gap: 10px; /* Espaçamento entre as imagens */
    margin-top: 10px; /* Margem superior para as imagens */
    
`;

export const ImageItem = styled.img`
    max-width: 250px;
    width: 100%;
    height: 250px; /* Mantém a proporção da imagem */
    border-radius: 10px; /* Suavização das bordas */
    object-fit: cover; /* Preenche o espaço sem distorcer */
    transition: transform 0.3s; /* Transição suave ao passar o mouse */

    &:hover {
        transform: scale(1.1); /* Efeito de zoom ao passar o mouse */
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-start; /* Mantém os links à esquerda */
    margin-top: 15px;
`;

export const LinkButton = styled.button`
    padding: 15px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin: 0 10px; /* Espaçamento entre os botões */
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 50px;

    &:hover {
        background-color: #555; /* Cor do botão ao passar o mouse */
    }
`;
