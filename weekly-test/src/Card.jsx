import React from "react";
import "./main.css";
function Card(props) {
    return(
        <>
        <div className="card">
          <img src={props.img}></img>
            <h1>{props.h1}</h1>
        </div>
        </>
    );
}

export default Card;