import React from 'react';
import {Card,CardActionArea,CardMedia,CardContent} from '@mui/material'

export default function ContentContainer(props) {
  const handlePlay=()=>{
    props.chooseTrack(props.track);
  }
  return (
            <Card sx={{width:'200px',height:'300px',cursor: 'pointer'}} onClick={handlePlay}>
            <CardActionArea>
            <CardMedia component="img" height='200px' width='200px' image={props.track.albumUrl}/>
            <CardContent>
                <div className="trackName">{props.track.title}</div>
                <div className="trackArtist">{props.track.artist}</div>
            </CardContent>

            </CardActionArea>
            </Card>
  );
}
