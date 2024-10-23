import styled from "styled-components";

export const ContactContainer = styled.section`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px auto;
    padding: 20px;
    border-radius: 15px;
    
    

    input {
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
    }
`;

export const Text = styled.p`
    font-size: 2rem;
    margin-bottom: 24px;
    width: 600px;
`

export const NameContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 100%;
    max-width: 600px;
    
    div {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 100%;
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`;

export const ContainerEmailEText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
`

export const FullWidthInput = styled.input`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;



export const ButtonSubmit = styled.button`
    display
    width: 250px;
    font-size: 14px;
    padding: 15px 80px;
    margin: 20px auto;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    background-color: #dfe6e9;
    color: #000;
    border-radius: 10px;
    &:hover {
        transform: scale(1.1);
    }
`