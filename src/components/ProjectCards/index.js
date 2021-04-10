import React from 'react';
import "./style.css";

const ProjectCard = ( {key, img, title, desc } ) => {
    //const $(".animateOne").animate({left: "45%"});

    return (
        <>
                <div class="col" id={key}>
                    <div class="card h-100">
                        <img src={img} class="card-img-top" alt="Project 1 screenshot"/>
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <hr/>
                            <p class="card-text">{desc}</p>
                        </div>
                        </div>
                    </div>
                    
{/*                     
                    <div class="col" id="cardTwo">
                        <div class="card h-100">
                        <img src={img} class="card-img-top" alt="WellMe"/>
                        <div class="card-body">
                            <h5 class="card-title">Group Project | Well❤️Me </h5>
                            <hr/>
                            <p class="card-text">A full stack application that allows users to track their wellness journey and reach fitness goals faster</p>
                        </div>
                    </div>
                    </div>
                    <div class="col" id="cardThree">
                        <div class="card h-100">
                        <img src={img} class="card-img-top" alt="passwrod generator screenshot"/>
                        <div class="card-body">
                            <h5 class="card-title">Random Password Generator</h5>
                            <hr/>
                            <p class="card-text">A browser application which generates a randomised password based on user-selected criteria. Parameters that can be included for the password are min-max length, lowercase letters, uppercase letters, numbers and special characters.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col" id="cardFour">
                        <div class="card h-100">
                        <img src={img} class="card-img-top" alt="day planner screenshot"/>
                        <div class="card-body">
                            <h5 class="card-title">Code Quiz</h5>
                            <hr/>
                            <p class="card-text">A timed MCQ quiz to test your knowledge of Javascript.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col" id="cardFive">
                        <div class="card h-100">
                        <img src={img} class="card-img-top" alt="Code quiz screenshot"/>
                        <div class="card-body">
                            <h5 class="card-title">Work Day Scheduler</h5>
                            <hr/>
                            <p class="card-text">A simple browser run application that allows user to save events for each hour of the work day. The app is set up to have past, present and future time blocks where events can be stored and cleared from local storage.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col" id="cardSix">
                        <div class="card h-100">
                        <img src={img} class="card-img-top" alt="Eat-Da-Burger"/>
                        <div class="card-body">
                            <h5 class="card-title">Eat-Da-Burger</h5>
                            <hr/>
                            <p class="card-text">A restaraunt app that lets users input the names of burgers they'd like to eat and devour them. This app will store every burger whether eaten or not in a database</p>
                        </div>
                        </div>
                    </div>
                    <div class="col" id="cardSeven">
                        <div class="card h-100">
                        <img src={img} class="card-img-top" alt="Employee-Tracker"/>
                        <div class="card-body">
                            <h5 class="card-title">Employee-Tracker</h5>
                            <hr/>
                            <p class="card-text">A CLI application that allows for easier management of a company's employess. Features include viewing, adding and deleting employees, departments and roles as well as updating employee roles and viewing total department salary budget.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col" id="cardEight">
                        <div class="card h-100">
                        <img src={img} class="card-img-top" alt="Note Taker"/>
                        <div class="card-body">
                            <h5 class="card-title">Note Taker</h5>
                            <hr/>
                            <p class="card-text">An application utilising backend Express.js to allow users to write, store and delete notes.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col" id="cardNine">
                        <div class="card h-100">
                        <img src={img} class="card-img-top" alt="weather dashboard screenshot"/>
                        <div class="card-body">
                            <h5 class="card-title">Weather Dashboard</h5>
                            <hr/>
                            <p class="card-text">A weather dashboard built for travellers allowing them to see the weather outlook for cities around the world to help them plan their trip.</p>
                        </div>
                        </div>
                    </div> */}
                    
        </>
    )
}

export default ProjectCard;

