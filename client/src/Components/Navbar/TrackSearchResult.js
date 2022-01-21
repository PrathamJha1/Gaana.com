import React from 'react';

export default function TrackSearchResult({track,chooseTrack}) {
    const trackPlayerHandler=()=>{
        chooseTrack(track);
    }
  return (
        <div style={{display:'flex',alignItems: 'flex-start',justifyContent: 'flex-start',columnGap:'20px',cursor:'pointer'}} onClick={trackPlayerHandler}>
            <img src={track.albumUrl} style={{height:'64px',width:'64px'}} alt="Album"/>
            <div className="tracking">
                <div className="trackName">{track.title}</div>
                <div className="trackArtist">{track.artist}</div>
            </div>
        </div>
  );
}
