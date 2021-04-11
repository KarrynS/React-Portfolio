import React from 'react';
import "./style.css";
import resume from "../../img/KarrynSawResume.pdf";

const Contact = () => {
    return (
        <>
            <div>
                <h1>Links</h1>
                <hr class="lineTitle animateOne"/>
            </div>

            <section>
                <div class="contact-grid">
                    <div class="row">
                    <a data-aos="flip-left"id="gitHubBtn" class="col-md-4" href="https://github.com/KarrynS" target="_blank" rel="noreferrer">
                    <i class="fab fa-github fa-5x btn" ></i>
                    <br/>
                    <p class="badge rounded-pill bg-light text-dark">Github</p>
                    </a>
                    <a class="col-md-4" href="https://www.linkedin.com/in/karrynsaw" target='_blank' rel="noreferrer">  
                    <i class="fab fa-linkedin fa-5x btn" ></i>
                    <br/>
                    <p class="badge rounded-pill bg-light text-dark">LinkedIn</p>
                    </a>
                    <a class="col-md-4" href={resume} target='_blank' rel="noreferrer">
                    <i class="far fa-file fa-5x btn" ></i>
                    <br/>
                    <p class="badge rounded-pill bg-light text-dark">Resume</p>
                    </a>
                </div>
                </div>
            </section>
            <div class="container-fluid">
                <div>
                    <h1>Contact Me</h1>
                    <hr class="lineTitle animateTwo"/>
                    <h5>Have a question or interested in collaborating together? </h5>
                    <div class="container">
                    <div class="email">
                        <a class="emaildiv" href = "mailto: karrynsaw@gmail.com" target='_blank' rel="noreferrer">
                        <i class="fas fa-envelope fa-5x"></i>
                        <br/>
                        <p class="badge rounded-pill bg-light text-dark">Send Email</p>
                        </a>  
                    </div>
                    <div cleass="telephone">
                        <div>
                        <i class="fas fa-mobile fa-5x"></i>
                        <br/>
                        <p class="badge rounded-pill bg-light text-dark">Mob: +61 403 014713</p>
                        </div> 
                    </div>
                    </div>
            
                </div>
            </div>
        </>
    )
}

export default Contact;
