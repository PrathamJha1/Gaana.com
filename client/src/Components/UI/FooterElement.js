import "./Content.css"
export function FooterElement(){
    return (<div className="footerelement">

        <ul className="LinkList">
            <h5>Albums</h5>
            <li><a href="/">English</a></li>
            <li><a href="/">Hindi</a></li>
            <li><a href="/">Telugu</a></li>
            <li><a href="/">Punjabi</a></li>
            <li><a href="/">Bengali</a></li>
            <li><a href="/">Kannada</a></li>
            <li><a href="/">Bhojpuri</a></li>
            <li><a href="/">Harayanvi</a></li>
            <li><a href="/" style={{color:'red'}}>View all</a></li>

        </ul>
    </div>  );  
}