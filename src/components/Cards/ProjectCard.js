import React from 'react';
import "./ProjectCard.css";

const ProjectCard = ( { img, title, desc, handleBoxToggle, index} ) => {
    
   

    return (
        <>
   
                <div className="col" id={index}>
                    <div className="card h-100"   onMouseEnter={() => handleBoxToggle(index)}>
                        <img src={img} className="card-img-top" alt="Project 1 screenshot"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <hr/>
                            <p className="card-text">{desc}</p>
                        </div>
                        </div>
                    </div>
          
        </>
    )
}

export default ProjectCard;

