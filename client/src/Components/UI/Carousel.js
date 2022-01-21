import React from "react";
import Carousel from "react-elastic-carousel";
import CardElement from "./CardElement" 
import "./Content.css";
import spotifyWebApi from "spotify-web-api-node";
import {useState,useEffect} from "react";
const spotifyApi = new spotifyWebApi({clientId:"b03ceec374c242ec804f1da219af1d80"})
const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 7 },
];
export default function Carousal(props){
  const accessToken=props.accessToken;
  // console.log(accessToken);
  const [result,setresult]=useState([]);
  const chooseTrack = (track)=>{
    // console.log("set");
    props.setcurrentTrack(track);
  }
  useEffect(()=>{
    if(!accessToken)return;
    spotifyApi.setAccessToken(accessToken);
  },[accessToken]);
  useEffect(()=>{
    spotifyApi.searchTracks("trending").then(res=>{
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
          <div className="carousal">
            <h2>Trending Songs</h2>
            <Carousel breakPoints={breakPoints}>
            {result.map(track=>(
                      <CardElement track={track} key={track.uri} chooseTrack={chooseTrack}/>
              
                    ))}
            </Carousel>
          </div>
        </>
      );
}