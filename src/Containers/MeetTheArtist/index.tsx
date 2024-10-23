import React, { useEffect, useState } from 'react';
import AboutArtist from './about';
import HeaderComponent from '../../components/Header';

const MeetTheArtistContainer: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Ajuste o valor conforme necessário
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        
        <section id="meet-the-artist">
            <HeaderComponent />
            <AboutArtist />
        </section>
    );
};

export default MeetTheArtistContainer;
