import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import SliderCard from "./SliderCard";
import spotifyWebApi from "spotify-web-api-node";
import "./Content.css";
import {useState} from "react";
const spotifyApi = new spotifyWebApi({clientId:"b03ceec374c242ec804f1da219af1d80"})
const breakPoints = [
  { width: 1, itemsToShow: 2 }
];

export default function ImageSlider(props) {
  const accessToken= props.accessToken;
   const [result,setresult]=useState([]);
    const chooseTrack = (track)=>{
      props.setcurrentTrack(track);
    }
    useEffect(()=>{
      if(!accessToken)return;
      spotifyApi.setAccessToken(accessToken);
    },[accessToken]);
    useEffect(()=>{
      spotifyApi.searchTracks("s").then(res=>{
        // console.log(res.body.tracks.items);
        setresult(res.body.tracks.items.map(track=>{
          const smallestAlbumImage=track.album.images.reduce((smallest,image)=>{
            if(image.height<smallest.height)return image;
            return smallest;
          },track.album.images[0])
          return{
            artist:track.artists[0].name,
            title:track.name,
            uri:track.uri,
            albumUrl:smallestAlbumImage.url
          }}));
        })
      },[])
// console.log(result);
  return (
    <>
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
        {result.map(track=>(
                      <SliderCard track={track} key={track.uri} chooseTrack={chooseTrack}/>
                    ))}
        </Carousel>
      </div>

    </>
  );
}
