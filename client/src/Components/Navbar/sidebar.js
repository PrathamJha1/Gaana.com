import {List,ListItem} from '@mui/material';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import "./sidebar.css";
function Sidebar(){
    return (
        <Box>
            <List className='List' style={{maxHeight:'717px',overflow:'auto',position:'fixed',marginTop:'67px'}}>
                <List>
                
                    <ListItem>
                    <Link to="/">  Home </Link>
                    </ListItem>
                    <ListItem><Link to="/radio">Radio</Link></ListItem>
                    <ListItem><Link to="/podcast">PodCast </Link></ListItem>
                    <ListItem><Link to="/india-music">Inida's Music</Link></ListItem>
                    <ListItem>Night Mode</ListItem>
                
                </List>
                <List>
                    <h2>Go Premium</h2>
                    <ListItem><Link to="/premium">  Go Add Free </Link></ListItem>
                    <ListItem><Link to="/premium"> Get Gaana Plus </Link></ListItem>
                </List>
                <List>
                    <h2>Quick Access</h2>
                    <ListItem><Link to="/trending-songs">Trending Songs</Link></ListItem>
                    <ListItem><Link to="/new-songs">New Songs</Link></ListItem>
                    <ListItem><Link to="/old-songs">Old Songs</Link></ListItem>
                    <ListItem><Link to="/albums">Albums</Link></ListItem>
                    <ListItem><Link to='/artist'>Artists</Link></ListItem>
                    <ListItem><Link to="/Lyrics">Lyrics</Link></ListItem>
                    <ListItem><Link to='/music-labels'>Music Labels</Link></ListItem>
                    <ListItem><Link to="/genres">Genres</Link></ListItem>
                </List>
                
            </List>
        </Box>
    )
}
export default Sidebar;