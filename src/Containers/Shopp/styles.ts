import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 10px;
    width: 300px;
    border: 2px solid transparent; /* Borda inicial invisível */
    transition: border 0.3s ease; /* Suaviza a transição */
    &:hover {
        border: 2px solid #b2bec3;
    }
`;

export const Price = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 10px 0;
`;

export const Button = styled.button`
    background-color: #ff5733;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #c7432e;
    }
`;

export const Image = styled.img`
    width: 280px;
    height: 280px;
    
`;

export const ContainerImage = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1280px;
    margin: 0 auto 80px auto;
`;
