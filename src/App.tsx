
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './Styles/styles';
import { useEffect } from 'react';
import ProviderRenderer from './Utils/tests';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Home from './pages/Home';
import MeeTheArtistPage from './pages/MeetTheArtist';
import Faq from './pages/Faq';
import VeganEcoFriendlyPage from './pages/Vegan&EcoFriendly';
import AppoinmentPage from './pages/Appointment';
import StoreTattoPage from './pages/StoreTattoo';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';




const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/meet-the-artist',
    element: <MeeTheArtistPage />
  },
  {
    path: '/appointment',
    element: <AppoinmentPage />
  },
  {
    path: '/temporary-tattoo-store',
    element: <StoreTattoPage />
  },
  {
    path: '/vegan-&-eco-friendly',
    element: <VeganEcoFriendlyPage />
  },
  {
    path: '/faq',
    element: <Faq />
  }
])

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ProviderRenderer>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </ ProviderRenderer>
  );
};

export default App;
