import styled from 'styled-components';

export const FooterContainer = styled.footer`
    height: 100vh;
    background-color: #f5f6fa; /* Cor de fundo */ 
    display: flex;
    padding: 0 20px 100px 200px; /* Espaçamento interno */
    text-align: center; /* Centraliza o texto */
    position: relative;
    border-top: 2px solid #ccc;
    scroll-margin-top: 20px;
`;

export const IdFooter = styled.div`
    margin: 100px;
`

export const Logo = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px; /* Ajuste a largura da logo */
    margin: 110px auto 40px auto; /* Espaço abaixo da logo */
    border-radius: 50%;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center; /* Centraliza os ícones */
    margin: 10px 0; /* Espaço acima e abaixo */
`;

export const IconLink = styled.a`
    color: #000; /* Cor do ícone */
    font-size: 24px; /* Tamanho do ícone */
    margin: 0 10px; /* Espaçamento entre os ícones */
    
    &:hover {
        color: #f0c040; /* Cor ao passar o mouse */
    }
`;

export const LinksFooter = styled.div`
    display: flex;
    flex-direction: column;
`