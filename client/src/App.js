import './App.css';
import {Container} from '@mui/material';
import { Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import NewSongsPage from "./pages/NewSongsPage";
import OldSongs from "./pages/OldSongs";
import Login from './Authorisation/Login';
import TrendingPage from './pages/TrendingPage'
import useAuth from './hooks/useAuth';
import {useState} from "react";
import Player from "./Components/Navbar/Player";
import Radio from "./pages/Radio";
import Albumspage from "./pages/Albumspage";
import Podcast from "./pages/Podcast";
const code = new URLSearchParams(window.location.search).get('code');
function App() {
  const accessToken = useAuth(code);
  console.log(code);
  const [currentTrack,setcurrentTrack]=useState();
  return (
    <>
      {currentTrack && 
      <Container className="Player" style={{position:'fixed',marginTop:'708px',width:'77.4%',zIndex:'1500'}}>
      <Player accessToken={accessToken} track={currentTrack}/>
      </Container>}
      <Route path='/' exact>
          {code?<Landingpage accessToken={accessToken} setcurrentTrack={setcurrentTrack} />:<Login/>}
      </Route>
      <Route path='/trending-songs' exact>
          <TrendingPage accessToken={accessToken} setcurrentTrack={setcurrentTrack}/>
      </Route>
      <Route path='/new-songs' exact>
          <NewSongsPage accessToken={accessToken} setcurrentTrack={setcurrentTrack}/>
      </Route>
      <Route path='/old-songs' exact>
          <OldSongs accessToken={accessToken} setcurrentTrack={setcurrentTrack}/>
      </Route>
      <Route path='/radio' exact>
          <Radio accessToken={accessToken} setcurrentTrack={setcurrentTrack}/>
      </Route>
      <Route path='/albums' exact>
          <Albumspage accessToken={accessToken} setcurrentTrack={setcurrentTrack}/>
      </Route>
      <Route path='/podcast' exact>
          <Podcast accessToken={accessToken} setcurrentTrack={setcurrentTrack}/>
      </Route>
    </>
  );
}

export default App;
