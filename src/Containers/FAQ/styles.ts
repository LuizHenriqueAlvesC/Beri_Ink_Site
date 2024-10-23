import styled from 'styled-components';

export const FAQContainer = styled.section`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const Question = styled.h3`
  font-size: 1.2rem;
  color: #007BFF;
  cursor: pointer;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

export const Answer = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 0.5rem;
  padding-left: 1rem;
  line-height: 1.5;
  transition: max-height 0.3s ease;
`;
