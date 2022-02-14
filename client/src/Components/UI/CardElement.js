import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import "../responsive.css";
export default function CardElement(props) {
const handlePlay = ()=>{
  props.chooseTrack(props.track);
}
  return (
    <Card className="card" onClick={handlePlay}>
      <CardActionArea>
        <CardMedia
          className="cardImage"
          component="img"
          image={props.track.albumUrl}
        />
        <CardContent>
          <div style={{textAlign: 'center'}}>
            <h4>
            {props.track.title}
            </h4>
            <h5>
            {props.track.artist}
            </h5>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
