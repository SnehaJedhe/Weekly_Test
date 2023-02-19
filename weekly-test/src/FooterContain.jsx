import React from "react";

function FooterContain(props) {
    return(
<>
<div className="footer-css">
       <h2>{props.h2}</h2>
       <p>{props.p}</p>
       <p>{props.p1}</p>
       <p>{props.p2}</p>
       <p>{props.p3}</p>
       <img src={props.img}></img>
 </div>
</>
    );
    
}

export default FooterContain;