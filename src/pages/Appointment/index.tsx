import HeaderComponent from "../../components/Header"
import AppointmentSection from "../../Containers/Appoinment"
import Footer from "../../Containers/footer"
import { Separador } from "../../Containers/MeetTheArtist/about/styles"

const AppoinmentPage = () => (
    <>
        <HeaderComponent />
        <Separador />
        <AppointmentSection />
        <Footer />
    </>
)

export default AppoinmentPage