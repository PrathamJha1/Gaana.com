import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import "../responsive.css";
import { CardActionArea,CardContent } from '@mui/material';
export default function ActionAreaCard(props) {
  const handlePlay = ()=>{
    props.chooseTrack(props.track);
  }
  return (
    <Card onClick={handlePlay} style={{cursor: 'pointer'}}>
      <CardActionArea>
        <CardMedia
          className="slider"
          component="img"
          image={props.track.albumUrl}
        />
        <CardContent>
            <div style={{textAlign:'center'}}>
              <h3>{props.track.title}</h3>
              <h4>{props.track.artist}</h4>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
