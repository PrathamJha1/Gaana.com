import './App.css';
import {Fragment} from "react";
import { Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Login from './Authorisation/Login';
import TrendingPage from './pages/TrendingPage'
import useAuth from './hooks/useAuth';
import {useState} from "react";
import Player from "./Components/Navbar/Player";
const code = new URLSearchParams(window.location.search).get('code');
function App() {
  const accessToken = useAuth(code);
  // console.log(code);
  const [currentTrack,setcurrentTrack]=useState();
  return (
    <Fragment>
      <Route path='/' exact>
       {code?<Landingpage accessToken={accessToken} setcurrentTrack={setcurrentTrack} />:<Login/>}
      </Route>
      <Route path='/trending-songs'>
        <TrendingPage accessToken={accessToken} setcurrentTrack={setcurrentTrack}/>
      </Route>
      {currentTrack && <Player accessToken={accessToken} track={currentTrack}/>}
    </Fragment>
  );
}

export default App;
