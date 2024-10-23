
import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 40px;
`

export const ContainerImg = styled.div`
    display: block;
    padding-right: 20px;

`
export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: column;
    text decoration: none;
    align-itens: center;
    text-align: left;
    margin-left: 200px;
    width: 1280px;
    justify-content: flex-start;
    font-family: 'Libre Baskerville', serif;
    padding-bottom: 100px;
    
    p {
        padding-bottom: 20px;
        font-size: 22px;

        a {
            color: #000;

            &:hover{
                text-decoration: underline;
            }
        }
    }
`

export const Separador = styled.div`
    height: 200px;
`

export const ImagePerfil = styled.img`
    width: 500px;
    height: 600px;
    border-radius: 50px;
`


export const Text = styled.span`
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
    color: #333;
    margin-right: 8px;
`;

export const Description = styled.div`
    text-align: left;
    
    font-size: 1.3em;
    font-family: 'Libre Baskerville', serif;
    color: #555;
    backdrop-filter: blur(10px);
    padding: 20px;
    height: auto;  
    border-radius: 20px;
    background: linear-gradient(
        to right,
        rgba(196, 193, 193, 0.1),
        rgba(196, 193, 193, 0.1),
        rgba(300, 300, 300, 0.1)
    );

    p{
        padding: 100px 20px 10px 50px;
    }
`;

export const Quote = styled.blockquote`
    font-style: italic;
    color: #777;
    margin: 20px 0;
    font-family: 'Libre Baskerville', serif;
    padding-left: 50px;
`;

