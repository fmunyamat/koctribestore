import { Link } from "react-router-dom";
import './navigation.styles.scss';

function Navigation({ outlet }) {
    return (
        <>
            <div className="nav-links-container">
                <Link className="nav-link" to="/our-story">Our Story</Link>
                <Link className="nav-link" to="/latest-music">Lastest Music</Link>
                <Link className="nav-link" to="/merch">Merch</Link>
            </div>
            {outlet}
        </>
    )
}

export default Navigation;