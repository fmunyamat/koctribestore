import './spotify-embed.styles.scss';

function SpotifyEmbed() {
  return (
    <>
        {/* <div style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}> */}
        <iframe
            className="spotify-iframe"
            src="https://open.spotify.com/embed/album/32LBtS22LQ1OG8JhgOG6dn"
            width="70%"
            height="500"
            allowtransparency="true"
            allow="encrypted-media"
            title="Spotify Player"
            style={{
                border: 'none'
              }}
        ></iframe>
        {/* </div> */}
    </>
  );
};

export default SpotifyEmbed;