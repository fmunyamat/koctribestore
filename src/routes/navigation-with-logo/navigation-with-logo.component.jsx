import { ReactComponent as KocLogo } from '../../assets/koclogo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../navigation/navigation.component';
import './navigation-with-logo.styles.scss';

function NavigationWithLogo({ outlet }) {
    return(
        <>
            <div className="nav-w-logo-container">
                <div className="nav-w-logo-link-container">
                    <Link className="nav-w-logo-link" to="/"><KocLogo className='nav-logo'/></Link>
                </div>
                <Navigation />
            </div>
            {outlet}
        </>
    )
}

export default NavigationWithLogo;