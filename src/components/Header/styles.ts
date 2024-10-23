import styled from 'styled-components';

export const ButtonContact = styled.a`
  background-color: hsla(90,3.13%,25.1%,1);
  padding: 10px 20px;
  color: hsla(0,0%,100%,1);
  border-radius: 15px;
  &:hover{
    background-color: hsla(100,5.30%,40.1%,2);
  }
`

export const NavLinks = styled.nav`
    display: flex;
    align items: center;
  a {
    margin-left: 20px;
    text-decoration: none;
    color: #333;

     &:hover{
      text-decoration: underline;
     }
  }
`;
