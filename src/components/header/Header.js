// import { React } from "react";
import './Header.css'

function Header(props){
    return(
       <div class="header">
        <h1>LOGO</h1>
        <ul>
            <li><a href="https://create-react-app.dev/">Home</a></li>
            <li><a href="https://create-react-app.dev/">About Us</a></li>
        </ul>
       </div>
    );
}

export default Header;