import * as React from 'react';
import "../responsive.css";
import { Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {DarkModeOutlined } from '@mui/icons-material';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import { useState ,useEffect} from 'react';
import Sidebar from './sidebar';
import TrackSearchResult from './TrackSearchResult';
import SecondNav from './SecondNav';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";
import "../responsive.css";
import spotifyWebApi from "spotify-web-api-node";
const spotifyApi = new spotifyWebApi({clientId:process.env.REACT_APP_CLIENT_ID});

export default function Navbar(props) {
  const accessToken = props.accessToken;
  // console.log(accessToken);
  // Setting up search state 
  const Searchicon = <SearchIcon className="SearchIcon"/>
  const [search,setSearch] = useState('');
  const [searchResults,setsearchResults] = useState([]);
  const [onfocus,setonfocus]=useState(false);
  const chooseTrack=(track)=>{
      props.setcurrentTrack(track);
      setSearch('');
  }
  const onFocusHandler= ()=>{
    setonfocus(!onfocus);
  }
  // console.log(searchResults);
  const SearchHandler =(e)=>{
    setSearch(e.target.value);
  }
  //Setting sidebar toggler
  const[buttonclick,setbuttonclick]=useState(false);
  const IconButtonHandler=()=>{
    //console.log(buttonclick);
    setbuttonclick(!buttonclick);
  }
  useEffect(()=>{
    if(!accessToken)return;
    spotifyApi.setAccessToken(accessToken);
  },[accessToken]);
  useEffect(()=>{
    // console.log(search);
    if(!search)return setsearchResults([]);
    if(!accessToken){
      console.log("Access token undefined");
      return;}
      let cancel=false;
      
    spotifyApi.searchTracks(search).then(res=>{
      // console.log(res.body.tracks.items);
      if(cancel)return;
      setsearchResults(res.body.tracks.items.map(track=>{
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
  return ()=> cancel = true;
},[search,accessToken]);

    return (
     <Fragment >

      <Box className="box">
      <AppBar className="Navbox" position="fixed" sx={{backgroundColor:'darkgrey',color:'black',zIndex:'1201',alignItems:'flex-start'}}>
        <Toolbar className="nav">
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={IconButtonHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{width:'50px',color:'red'}}>
            Gaana
          </Typography>
        <div className="search">
            <form className="form" >
                {Searchicon}
                <input type="search" className ={{onfocus}?"SearchInputExtended":"SearchInput"} placeholder='Search Artists,Songs,Albums' value={search} onChange={SearchHandler} onClick={onFocusHandler}/>
                {onfocus && 
                <div  className="Searchbar">
                    {searchResults.length===0 && <h4 style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'50%'}}>Search for any Song/Artist/Albums</h4>}
                    {searchResults.map(track=>(
                      <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
                    ))}
                </div>}
            </form>
        </div>
          <div className='Buttons'>
              <button className="RedButton1">Go Ad free <span>NEW</span></button>
              <button className="RedButton2">Get Gaana Plus</button>
          </div>
          <div className='Iconbuttons'>
              <DarkModeOutlined className='icons' fontSize='medium' sx={{color:'#A4A9AD'}} />
              <GTranslateOutlinedIcon className='icons' fontSize='medium' sx={{color:'#A4A9AD'}}/>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar className="Navshow" postion ="fixed" sx={{backgroundColor:"white"}}>
          <SecondNav></SecondNav>
      </AppBar>
      <AppBar color='default'>
      {buttonclick && <Sidebar/>}
      </AppBar>
    </Box>
     </Fragment> 
    );
  }
  