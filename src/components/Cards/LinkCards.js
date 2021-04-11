import React from "react";
import "./ProjectCard.css";

const LinkCards = (props) => {
    return (
        <>
           <div className="col" id={props.key}>
                    <div class="card-body">
                        <h5 class='card-title'>{props.title}</h5>
                        <hr class='cardhr'/>
                        <p class='card-text' id='cardText'>"HTML, CSS, javaSript, JQuery, API, Local Storage, AJAX"</p>
                        <a class='btn' target='_blank' href={props.demo} rel="noreferrer">Live demo</a>
                        <a class='btn' target='_blank' href={props.code} rel="noreferrer">View Source Code</a>
                    </div>
               
            </div> 
        </>
    )
}

export default LinkCards;
