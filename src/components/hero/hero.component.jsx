import { ReactComponent as KocLogo } from '../../assets/koclogo.svg';
import './hero.styles.scss';

function Hero() {
    return (
        <>
            <div className="logo-container">
                <KocLogo className='logo'/>
            </div>
        </>
    )
}

export default Hero;