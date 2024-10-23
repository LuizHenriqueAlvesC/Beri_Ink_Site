
import {  
    Description, 
    Quote,
    MainContainer,
    ImagePerfil,
    ContainerLinks,
    ContainerImg,
    Separador
} from './styles';

import PERFIL_IMAGE from '../../../assets/Perfil.png';
import { Title } from '../../../Styles/styles';

// import WORK_IMAGE_1 from '../../../assets/images/tatto-1.jpg';
// import WORK_IMAGE_2 from '../../../assets/images/tatto-2.jpg';
// import WORK_IMAGE_3 from '../../../assets/images/tatto-3.jpg';
// import WORK_IMAGE_4 from '../../../assets/images/tatto-4.jpg';


const AboutArtist = () => {
    return (
        <section >
            <Separador />
                <Title data-aos="fade-up">Meet the Artist</Title>
            <MainContainer id="about-artist"
            data-aos="fade-up">
                    <ContainerImg>
                        <ImagePerfil src={PERFIL_IMAGE} alt="" />
                    </ContainerImg>
                    
                <Description data-aos="fade-up">
                    <p>
                        I am a Fine Line artist based in Los Angeles, California. 
                        I specialize in black & grey, delicate, and simple designs, 
                        but I love to take detailed and big projects sometimes.
                        My passion for art started when I was a teenager. 
                        For years I designed dancewear costumes and used my creativity to upcycle clothing. 
                        I fell in love with Fine Line tattoos in 2021, when I began my tattoo artist career.
                        I speak English, Portuguese, Japanese, and can communicate a little bit in Spanish.
                    </p>
                    <Quote>"A tatuagem é uma forma de eternizar momentos."</Quote>
                </Description>
            </MainContainer>
            <ContainerLinks data-aos="fade-up">
                        <p>
                            E-mail: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=beritattoo@gmail.com">beritattoo@gmail.com</a>
                        </p>
                        <p>
                            Learn more: <a href="https://www.instagram.com/beri.ink/">Instagram link</a>
                        </p>
                </ContainerLinks>
            
        </section>
    );
};

export default AboutArtist;
