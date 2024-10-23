
import { Title } from "../../Styles/styles";
import { Card, Button, Price, ContainerImage, Image } from "./styles";

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

// Função para transformar o contexto em um array de imagens
const getImages = () => {
  return images.keys().map(images);
};

const TattoStore = () => {
    const imageList = getImages();
    return (
        <>
            <section>
                <Title>Temporary Tattoo Store</Title>
                <ContainerImage data-aos="fade-up">
                    {imageList.map((src: string, index: number) => (
                        <Card key={index}>
                            <Image src={src} alt={`Imagem ${index}`} />
                            <p>Informação da tatto</p>
                            <Price>$50.00</Price> {/* Exemplo de preço */}
                            <Button>Comprar</Button>
                        </Card>
                    ))} 
                </ContainerImage>
            </section>
        </>
    );
};

export default TattoStore;
