import React from 'react'

const DynamicProjectCards = ({title, languages, demo, code}) => {
    return (
        <>
           <div className="col" id={title}>
                    <div class="card-body">
                        <h5 class='card-title'>{title}</h5>
                        <hr class='cardhr'/>
                        <p class='card-text' id='cardText'>"HTML, CSS, javaSript, JQuery, API, Local Storage, AJAX"</p>
                        <a class='btn' target='_blank' href={demo} rel="noreferrer">Live demo</a>
                        <a class='btn' target='_blank' href={code} rel="noreferrer">View Source Code</a>
                    </div>
               
            </div> 
        </>
    )
}

export default DynamicProjectCards;
