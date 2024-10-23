import { 
    LinksSectionContainer, 
    TextContainer, 
    ExploreTitle, 
    Text, 
    GalleryContainer, 
    ImageItem, 
    LinksContainer, 
    LinkButton 
} from './styles';

const LinksSection = () => {
    const images = [
        require('../../assets/images/tatto-1.jpg'),
        require('../../assets/images/tatto-2.jpg'),
        require('../../assets/images/tatto-3.jpg'),
        require('../../assets/images/tatto-4.jpg'),
        require('../../assets/images/tatto-4.jpg'), // Adicione suas imagens
        require('../../assets/images/tatto-4.jpg'), // Adicione suas imagens
    ];

    return (
        <>
        <ExploreTitle data-aos="fade-up">Explore Mais</ExploreTitle>
        <LinksSectionContainer data-aos="fade-up">
            <TextContainer>
                <Text>
                    Caso tenha interesse, clique nas opções abaixo para visualizar mais trabalhos ou visitar a loja de tatuagens.
                </Text>
                <Text>
                    Na galeria, você encontrará uma seleção das minhas melhores tatuagens, cada uma com um significado especial.
                </Text>
                <Text>
                    Visite a loja para ver uma variedade de designs disponíveis e fazer sua encomenda.
                </Text>
                <LinksContainer>
                    <a
                        href="/fotos" // Caminho para a página de fotos
                    >
                    </a>
                </LinksContainer>
                    <LinkButton>
                        Veja a Galeria
                    </LinkButton>
                    <LinkButton>
                        Visite a Loja
                    </LinkButton>
            </TextContainer>
            <GalleryContainer>
                {images.map((src, index) => (
                    <ImageItem key={index} src={src} alt={`Mini Gallery Image ${index + 1}`} />
                ))}
            </GalleryContainer>
        </LinksSectionContainer>
        </>
    );
};

export default LinksSection;
