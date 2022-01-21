import "./SecondNav.css";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
export default function SecondNav(){
    return (
        <ul className="SecondNav">
            <Link to='/'>
            <li className="list">All</li>
            </Link>
            <Link to='/trending-songs'>
                <li className="list">Trending Songs</li>
            </Link>
            <Link to='new-songs'>
                <li className="list">New Songs</li>
            </Link>
            <Link to='old-songs'>
                <li className="list">Old Songs</li>
            </Link>
            <Link to='mood'>
                <li className="list adjust">Mood & Genres <span><KeyboardArrowDown className="arrow-icon"/></span></li>
            </Link>
            <Link to='albums'>
                <li className="list">Album</li>
            </Link>
            <Link to='radio'>
                <li className="list">Radio</li>
            </Link>
            <Link to='podcast'>
                <li className="list">Podcast</li>
            </Link>
            <Link to='myplaylist'>
                <li className="list">My Playlist</li>
            </Link>
        </ul>
    );
}