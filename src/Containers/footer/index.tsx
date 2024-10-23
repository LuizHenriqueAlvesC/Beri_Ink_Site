import { FooterContainer, Logo, SocialIcons, IconLink, LinksFooter } from './styles'; // Importe os estilos que você irá criar
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Importando ícones de redes sociais
import logo from '../../assets/logotipo.jpg'; // Ajuste o caminho para a sua logo
import ContactSection from '../../components/Contact';

const Footer = () => {
    return (
            <>
                <FooterContainer  data-aos="fade-up">
                <LinksFooter >
                <Logo src={logo} alt="Logo da Bumani Ink" />
                <SocialIcons>
                    <IconLink href="https://instagram.com" target="_blank"><FaInstagram /></IconLink>
                    <IconLink href="https://facebook.com" target="_blank"><FaFacebook /></IconLink>
                    <IconLink href="https://twitter.com" target="_blank"><FaTwitter /></IconLink>
                </SocialIcons>
                <p >© {new Date().getFullYear()} Beri Ink. Todos os direitos reservados.</p>
                </LinksFooter>
                <ContactSection />
                </FooterContainer>
            </>
    );
};

export default Footer;