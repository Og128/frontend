import { useTranslation } from 'react-i18next';
import Mecard from '../Mecard';
import Title from '../Title';
import './styles.css'

function Home() {

    const { t, i18n } = useTranslation();
    const currentNamespace =
        i18n.language === 'en' ? 'transTextEN' : 'transTextFR';

    return (
        <>
            <Title props={'accueil'} />
            <div className="home-container">
                <p className="home-text">
                    {t(`${currentNamespace}:accueil.text`)}
                </p>
                <div className="do-container">
                    <h3 className="do-title">{t(`${currentNamespace}:accueil.who`)}</h3>
                    <div className="do-grid">
                        <Mecard props={'card1'} />
                        <Mecard props={'card2'} />
                        <Mecard props={'card3'} />
                        <Mecard props={'card4'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;