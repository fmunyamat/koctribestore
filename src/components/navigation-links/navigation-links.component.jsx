import { Link } from "react-router-dom";
import { routeInfo } from "../../utils/route-info/route-info.utils";
import './navigation-links.styles.scss';

function NavigationLinks() {

    const navLinkRoutes = routeInfo();

    return (
        <>
            <div className="nav-links-container">
                {navLinkRoutes.map(({ id, label, path }) => {
                    return <Link className="nav-link" to={path} key={id}>{label}</Link>
                })}
            </div>
        </>
    )
}

export default NavigationLinks;