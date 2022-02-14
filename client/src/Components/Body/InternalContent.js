import "./Content.css";
import Carousal from "../UI/Carousel";
import ImageSlider from "../UI/ImageSlider";
import Footer from "../UI/Footer";
export default function InterContent(props){
    return (
        <ul className="Internalcontent">
            <ImageSlider accessToken={props.accessToken} setcurrentTrack={props.setcurrentTrack}/>
            <Carousal accessToken={props.accessToken} setcurrentTrack={props.setcurrentTrack}/>
            <Footer/>
        </ul>
    )
}