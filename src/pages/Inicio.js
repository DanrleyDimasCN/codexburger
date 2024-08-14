import Carrosel from "../components/Carrosel";
import ImgDeFundo from "../components/ImgDeFundo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Inicio() {
    return (
        <div>
            <ImgDeFundo/>
            <NavBar/>
            <Carrosel/>
            <Footer/>
        </div>
    )
}