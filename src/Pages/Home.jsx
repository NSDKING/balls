import Banner from "../Components/Banner/Banner";
import Header from "../Components/Header/Header";
import './css/Home.css'
import image from "./img/ball.png"
import tag from './img/tag.png'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();

    return(
        <section className="home" >
        
            <Banner text={'made by enkas web development'}/>
            <div className="home-main" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize: 'cover' }}>
                <div className="Home-head">
                    <h1 id="imperial" ><i>IMPERIAL</i></h1>
                    <h2 id="odyssey"><i>odyssey</i></h2>
                    <h2 id="experience"><i>EXPERIENCE</i></h2>
                </div>
                <img src={tag} alt="tag" />
                <button onClick={()=>{
                    navigate("/royaute")
                }}>
                    voter
                </button>
            </div>
            <div className="home-section">
                <h1 className="title">THE LIBERMANN TOUCH</h1>
                <div className="textBox">
                    <p className="text">

                    C'est avec une exultation sans pareille que je m'adresse à vous. La célèbre institution qu’est le Collège Libermann, s'apprête à organiser une soirée d'une magnificence extraordinaire.  
                    </p>
                    <p className="text">
                    Votre présence, tout comme l'éclat des étoiles dans le firmament, enrichirait notre rassemblement. Nous nourrissons l'espoir de vous voir parmi nous.

                    </p>
                </div>
            </div>
            <div className="home-section2" >
                <h1 className="title">partenaire</h1>
                <div className="PartBox-container">
                    <div className="PartBox"></div>
                    <div className="PartBox"></div>
                    <div className="PartBox"></div>
                    <div className="PartBox"></div>
                    <div className="PartBox"></div>
                    <div className="PartBox"></div>
                </div>

            </div>

        </section>
    )

}