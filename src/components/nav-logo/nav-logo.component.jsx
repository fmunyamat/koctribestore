import { Link } from "react-router-dom";
import { ReactComponent as KocLogo } from '../../assets/koclogo.svg';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './nav-logo.styles.scss';

function NavLogo() {

    const [navLogoToggle, setNavLogoToggle] = useState('hidden');
    const location = useLocation();

    useEffect(() => {
        (location.pathname === '/') ? setNavLogoToggle('hidden') : setNavLogoToggle('show');
    },[location.pathname])

    return(
        <>
            <div className="nav-logo-link-container">
                <Link className="nav-logo-link" to="/"><KocLogo className={`nav-logo logo-toggle-${navLogoToggle}`}/></Link>
            </div>
        </>
    )
}

export default NavLogo;