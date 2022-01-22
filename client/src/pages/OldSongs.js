import Footer from "../Components/UI/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Fragment } from "react";
import {Container} from "@mui/material";
import {useState,useEffect} from "react";
import spotifyWebApi from "spotify-web-api-node";
import ContentContainer from "../Components/Body/ContentContainer"
const spotifyApi = new spotifyWebApi({clientId:process.env.REACT_APP_CLIENT_ID})
export default function OldSongsPage(props){
    const [result,setresult]=useState([]);
    const chooseTrack = (track)=>{
      // console.log("set");
      props.setcurrentTrack(track);
    }
    useEffect(()=>{
        if(!props.accessToken)return;
        spotifyApi.setAccessToken(props.accessToken);
      },[props.accessToken]);
    useEffect(()=>{
      spotifyApi.searchTracks("oldsongs").then(res=>{
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

    return (
        <Fragment>
            <Navbar accessToken={props.accessToken} setcurrentTrack={props.setcurrentTrack}/>   

                <Container fixed sx={{display: 'flex',flexWrap:'wrap',alignItems:'center',justifyContent: 'center',gap:'30px',padding:'2%'}}>
                    {result.map(track=>(
                        <ContentContainer key={track.uri} track={track} chooseTrack={chooseTrack}/>
                    ))}
                </Container>
                <Footer/>

        </Fragment>
    );
}