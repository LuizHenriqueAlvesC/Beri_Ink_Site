import styled from 'styled-components';

export const VeganEcoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const VeganSection = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const EcoSection = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ProductItem = styled.li`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #333;

  strong {
    font-weight: bold;
    color: #222;
  }
`;

export const StyledMessage = styled.p`
  font-style: italic;
  text-align: center;
  color: #555;
  margin-top: 2rem;
  font-size: 1.2rem;
`;
