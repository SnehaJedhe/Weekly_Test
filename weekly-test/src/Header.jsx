import React from "react";
import './header.css';
function Header() {
    return(
       <>
       <div className="header">
        <img src="https://media.glassdoor.com/sqll/31139/urban-science-squarelogo.png"></img>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        <button>Enquiry Now</button>
       </div>
       </>
    );
    
}
export default Header;