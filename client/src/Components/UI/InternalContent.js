import "./Content.css";
import Carousal from "./Carousel";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
export default function InterContent(props){
    return (
        <ul className="Internalcontent">
            <ImageSlider accessToken={props.accessToken} setcurrentTrack={props.setcurrentTrack}/>
            <Carousal accessToken={props.accessToken} setcurrentTrack={props.setcurrentTrack}/>
            <Footer/>
        </ul>
    )
}