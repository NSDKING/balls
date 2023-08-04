import Banner from "../Components/Banner/Banner";
import './css/vote.css'


export default function VotePage() {
    return(
        <section className="VotePage">
            <Banner text={'made by enkas web development'}/>
            <h1 className="title" id="cat">
                categories
            </h1>
            <div className="links">
                <h3>Royauté</h3>
                <h3>danse</h3>
                <h3>impresario </h3>
                <h3>tenue de soirée</h3>
                <h3>charismatique</h3>
                <h3>comique</h3>
                <h3>interprete vocale</h3>
                <h3>handballeur </h3>
                <h3>Ping Pong </h3>
                <h3>couple</h3>
                <h3>célibataire </h3>
                <h3>la plus désenchantée</h3>
            </div>

        </section>
    )
}
