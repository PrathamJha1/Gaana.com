import Content from "../Components/UI/Content";
import Navbar from "../Components/Navbar/Navbar";
import { Fragment } from "react";
export default function Landingpage(props){
    return (
        <Fragment>
            <Navbar accessToken={props.accessToken} setcurrentTrack={props.setcurrentTrack}/>   
            <Content accessToken={props.accessToken} setcurrentTrack={props.setcurrentTrack}/>

        </Fragment>
    );
}