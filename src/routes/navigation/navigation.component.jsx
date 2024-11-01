import { Outlet } from "react-router-dom";
import NavigationLinks from "../../components/navigation-links/navigation-links.component";
import NavLogo from "../../components/nav-logo/nav-logo.component";
import MobileNavigation from "../../components/mobile-navigation/mobile-navigation.component";
import './navigation.styles.scss';


function Navigation() {

    return (
        <>
            <div className="nav-container">
                <NavLogo />
                <div className="web-nav">
                    <NavigationLinks />
                </div>
                <div className="mobile-nav">
                    <MobileNavigation />
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;