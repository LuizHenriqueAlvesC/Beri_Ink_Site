
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Header, Logo } from '../../Styles/styles';
import {  NavLinks } from './styles';
import { IconLink } from '../../Containers/footer/styles';

const HeaderComponent = () => {
  return (
    <Header>
      <Logo href='/'>
        BERI INK
      </Logo>
      <NavLinks>
        <a href='/meet-the-artist'>Meet the Artist</a>
        <a href='/vegan-&-eco-friendly'>Vegan & Eco-Friendly</a>
        <a href='/appointment'>Appointment</a>
        <a href='/temporary-tattoo-store'>Temporary Tattoo Store</a>
        <a href='/faq'>FAQs</a>
        <IconLink href="https://instagram.com" target="_blank"><FaInstagram /></IconLink>
        <IconLink href="" target="_blank"><FaEnvelope /></IconLink>
      </NavLinks>
    </Header>
  );
};

export default HeaderComponent;
