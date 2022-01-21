import SpotifyPlayer from "react-spotify-web-playback";
export default function Player(props) {
    // console.log(accessToken);
    if(!props.accessToken) return null;
     console.log(props.track);
    return(
      <SpotifyPlayer token={props.accessToken} showSaveIcon uris={props.track?[props.track.uri]:[]}/>
    );
}
