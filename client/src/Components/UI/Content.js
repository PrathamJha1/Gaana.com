import Rightbar from "../Rightbar";
import InternalContent from "./InternalContent";
import "./Content.css";
export default function Content(props){
    return (
        <div className="content">
            
                <li>
            <InternalContent accessToken={props.accessToken} setcurrentTrack={props.setcurrentTrack}/>
                </li>
                <li>
            <Rightbar/>
                </li>
        </div>
    )
}