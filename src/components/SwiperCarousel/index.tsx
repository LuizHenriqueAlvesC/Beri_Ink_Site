import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

import { ImageCarrossel, CarouselItem, SwiperContainer } from './styles';
import { ButtonLink } from '../../Containers/Galery/styles';
import { Title2 } from '../../Styles/styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
    require('../../assets/images/imagem1.jpeg'),
    require('../../assets/images/imagem2.jpeg'),
    require('../../assets/images/imagem3.jpeg'),
    require('../../assets/images/imagem4.jpeg'),
    require('../../assets/images/imagem5.jpeg'),
    require('../../assets/images/imagem6.jpeg'),
    require('../../assets/images/imagem7.jpeg'),
    require('../../assets/images/imagem8.jpeg'),
    require('../../assets/images/imagem9.jpeg'),
    require('../../assets/images/imagem10.jpeg')
];

const SwiperCarousel = () => {
    return (
        <SwiperContainer data-aos="fade-up" >
            <Title2>Temporary Tattoo Store</Title2>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={4}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: SwiperType) => console.log(swiper)}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <CarouselItem>
                            <ImageCarrossel src={src} alt={`Tattoo ${index + 1}`} />
                            <div>
                                <p>Informação da tattoo</p>
                                <p>$50.00</p>
                                <ButtonLink href='/temporary-tattoo-store'>Saiba mais</ButtonLink>
                            </div>
                        </CarouselItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperContainer>
    );
};

export default SwiperCarousel;
