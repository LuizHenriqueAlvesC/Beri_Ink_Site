import React from "react";
import { Header, Logo } from "../../../Styles/styles";
import { Links, SearchContainer, SearchInput, CartIcon } from "./styles";
import { FaEnvelope, FaInstagram, FaSearch, FaShoppingCart } from "react-icons/fa";
import { ButtonContact } from "../../../components/Header/styles";
import { IconLink } from "../../footer/styles";


const HeaderShoppContainer = () => {
    return (
        <Header>
            <div>
            <Logo href="/">BERI INK</Logo>
            </div>
            <Links>
                <SearchContainer>
                    <SearchInput type="text" placeholder="Pesquisar..." />
                    <FaSearch style={{ position: "absolute", right: "10px", top: "8px" }} />
                </SearchContainer>
                <CartIcon to="/carrinho">
                    <FaShoppingCart />
                </CartIcon>
                <IconLink><FaInstagram /></IconLink>
                <IconLink><FaEnvelope /></IconLink>
            </Links>
        </Header>
    );
};

export default HeaderShoppContainer;