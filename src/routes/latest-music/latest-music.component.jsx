import SpotifyEmbed from "../../components/spotify-embed/spotify-embed.component";
import './latest-music.styles.scss';

function LatestMusic() {
    return(
        <>
            <div className="spotify-container">
                <SpotifyEmbed />
            </div>
        </>
    )
}

export default LatestMusic;