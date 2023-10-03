import Mecard from '../Mecard';
import Title from '../Title';
import './styles.css'
import data from '../../locales/fr/texte.json'

function Home (){

    return(
        <>
        <Title props={'accueil'}/>
        <div className="home-container">
            <p className="home-text">
                {data.accueil.text}
            </p>
            <div className="do-container">
                <h3 className="do-title">{data.accueil.who}</h3>
                <div className="do-grid">
                    <Mecard props={'card1'}/>
                    <Mecard props={'card2'}/>
                    <Mecard props={'card3'}/>
                    <Mecard props={'card4'}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;