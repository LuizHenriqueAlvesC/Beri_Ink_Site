import styled from "styled-components";
import { Link } from "react-router-dom";

export const Links = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    text-decoration: none;
    color: #333;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-right: 20px;
`;

export const SearchInput = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CartIcon = styled(Link)`
  font-size: 24px;
  color: #333;
  text-decoration: none;
  margin-left: 20px;
  margin-right: 50px;

  &:hover {
    color: #000;
  }
`;
