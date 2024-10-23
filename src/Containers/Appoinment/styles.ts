import styled from 'styled-components';

export const AppointmentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const InfoText = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;

  a {
    color: #007BFF;
    text-decoration: underline;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.4rem;
  color: #555;
  margin-top: 1.5rem;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const HighlightText = styled.p`
  font-style: italic;
  color: #555;
  margin-top: 1rem;
`;

export const PriceInfo = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 2;
  margin-top: 20px;
  
  span {
    font-weight: bold;
    color: #222;
  }
`;
