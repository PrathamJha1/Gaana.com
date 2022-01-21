import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea,CardContent } from '@mui/material';
export default function ActionAreaCard(props) {
  const handlePlay = ()=>{
    props.chooseTrack(props.track);
  }
  return (
    <Card sx={{width:400}} onClick={handlePlay} style={{cursor: 'pointer'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400px"
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
