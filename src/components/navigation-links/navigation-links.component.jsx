import { Link } from "react-router-dom";
import './navigation-links.styles.scss';

function NavigationLinks() {

    const navBarLinks = [
        {
            id: 'our-story',
            label: 'Our Story',
            path: '/our-story'
        },
        {
            id: 'latest-music',
            label: 'Latest Music',
            path: '/latest-music'
        },
        {
            id: 'merch',
            label: 'Merch',
            path: '/merch'
        }
    ];

    return (
        <>
            <div className="nav-links-container">
                {navBarLinks.map(({ id, label, path }) => {
                    return <Link className="nav-link" to={path} key={id}>{label}</Link>
                })}
            </div>
        </>
    )
}

export default NavigationLinks;