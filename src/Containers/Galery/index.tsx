import { Title, Title2 } from '../../Styles/styles';
import { ContainerImage,Image } from './styles';
import SwiperCarousel from '../../components/SwiperCarousel';

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

// Função para transformar o contexto em um array de imagens
const getImages = () => {
  return images.keys().map(images);
};

const Galery = () => {
  const imageList = getImages();

  return (
    <>
      <Title data-aos="fade-up">Galery</Title>
      <ContainerImage data-aos="fade-up">
        {imageList.map((src: string, index: number) => (
          <Image key={index} src={src} alt={`Imagem ${index}`} />
        ))}
      </ContainerImage>
      <SwiperCarousel />
    </>
  );
};

export default Galery;
