//A Simple Login page that generates Access,Refresh,ExpiresIn Tokens from Spotify Web Api
const Auth_URL="https://accounts.spotify.com/authorize?client_id=6c96d619267643efbde91ad3fea91f14&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
export default function Login(){
    
    return (
        <div style={{display:'flex' ,alignItems:'center',justifyContent:'center',flexDirection:'column',height:'60vh'}}>
            <h2>Login Here with Spotify by clicking the Login Button</h2>
            <a href={Auth_URL}  style={{background:'green',borderRadius:'25px',paddingTop:'15px',paddingBottom:'15px',paddingLeft:'10px',paddingRight:'10px',color:'white',border:'2px solid darkgreen'}}>Login with Spotify</a>
        </div>
    );
}