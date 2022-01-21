import "./Content.css";
import { FooterElement } from "./FooterElement";
import "https://kit.fontawesome.com/75e360d1be.js"
export default function Footer(){
    return(
        <div className="footer">
            <div className="about" style={{borderBottom:'0.5px solid grey'}}>
                <h1>Bas Bajna Chahiye Gaana</h1>
                <p style={{color:'grey'}}>
Gaana is the one-stop solution for all your music needs. Gaana offers you free, unlimited access to over 30 million Hindi Songs, Bollywood Music, English MP3 songs, Regional Music & Mirchi Play.</p>
            </div>
            <div className="abouticon" style={{borderBottom:'0.5px solid grey',width:'100%',display:'flex',alignItems:'center',justifyContent:'center',columnGap:'10px',padding:'20px 0' }}>
                <a href="/" style={{color:'#3b5998'}}><i class="fab fa-facebook fa-2x"></i></a>
                <a href="/" style={{color:'#00acee'}}><i class="fab fa-twitter fa-2x"></i></a>
            </div>
            <div className="footitems" style={{display:'flex',alignItems:'center',justifyContent:'center',columnGap:'20px',fontSize:'12px',borderBottom:'0.5px solid grey',width:'100%',paddingBottom:'15px'}}>
                <a href="/">Advertise on gaana.com</a>
                <a href="/">Terms of Use</a>
                <a href="/">Privacy policy</a>
                <a href="/">Feedback</a>
                <a href="/">Report an issue</a>
                <a href="/">Partners</a>
                <a href="/">Sitemap</a>
                <a href="/">FAQ</a>

            </div>
            <h4 style={{textAlign:'center'}}>QuickLinks</h4>
            <div className="links" style={{borderBottom:'0.5px solid grey'}}>
            <FooterElement/>
            <FooterElement/>
            <FooterElement/>
            <FooterElement/>
            <FooterElement/>
            <FooterElement/>
            </div>
            <div className="Footend">
                <p style={{textAlign:'center',fontSize:'13px'}}>© Gamma Gaana Ltd. 2022, All Rights Reserved</p>
            </div>

        </div>
    )
}