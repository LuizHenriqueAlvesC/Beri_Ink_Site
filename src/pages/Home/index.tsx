import HeaderComponent from "../../components/Header";
import Footer from "../../Containers/footer";
import Galery from "../../Containers/Galery";
import { Separador } from "../../Containers/MeetTheArtist/about/styles";

const Home = () => (
    <>
        <HeaderComponent />
        <Separador />
        <Galery />
        <Footer />
    </>
)

export default Home;