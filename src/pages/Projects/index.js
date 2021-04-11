import React, { useState, useEffect } from 'react'
import Project1Img from "../../img/SS-Project_1.png";
import WellMeImg from "../../img/wellme.png";
import PasswordGenImg from "../../img/SS-PasswordGenerator.png";
import DayPlannerImg from "../../img/SS-DayPlanner.png";
import CodeQuizImg from "../../img/SS-CodeQuiz.png";
import EatDaBurgerImg from "../../img/SS-Eat-Da-Burger.png";
import EmployeeTrackerImg from "../../img/Employee_Tracker_ScreenShot.png";
import SavedNotesImg from "../../img/SavedNotes.png";
import WeatherDashboardImg from "../../img/SS-WeatherDashboard.png";
import ProjectCards from "../../components/Cards/ProjectCard";
import projects from "../../utils/projects.json";
const projectArray = [
    {
        // img: Project1Img,
        title: "Group Project | Appetite",
        desc: "APPetite is a web browser based app that connects tourists to local cuisines in the area helping to generate sales for local businesses."
    },
    {
        // img: WellMeImg,
        title: "Group Project | Well❤️Me",
        desc: "A full stack application that allows users to track their wellness journey and reach fitness goals faster"
    },
    {
        // img: PasswordGenImg,
        title: "Random Password Generator",
        desc: "A browser application which generates a randomised password based on user-selected criteria. Parameters that can be included for the password are min-max length, lowercase letters, uppercase letters, numbers and special characters."
    },
    {
        // img: CodeQuizImg,
        title: "Code Quiz",
        desc: "A timed MCQ quiz to test your knowledge of Javascript."
    },
    {
        // img: DayPlannerImg,
        title: "Work Day Scheduler",
        desc: "A simple browser run application that allows user to save events for each hour of the work day. The app is set up to have past, present and future time blocks where events can be stored and cleared from local storage."
    },
    {
        // img: EatDaBurgerImg,
        title: "Eat-Da-Burger",
        desc: "A restaraunt app that lets users input the names of burgers they'd like to eat and devour them. This app will store every burger whether eaten or not in a database"
    },
    {
        // img: EmployeeTrackerImg,
        title: "Employee-Tracker",
        desc: "A CLI application that allows for easier management of a company's employess. Features include viewing, adding and deleting employees, departments and roles as well as updating employee roles and viewing total department salary budget."

    }, {
        // img: SavedNotesImg,
        title: "Note Taker",
        desc: "An application utilising backend Express.js to allow users to write, store and delete notes."
    },
    {
        // img: WeatherDashboardImg,
        title: "Weather Dashboard",
        desc: "A weather dashboard built for travellers allowing them to see the weather outlook for cities around the world to help them plan their trip."
    },
]
const Project = () => {

    const [projectState, setProjectState] = useState(projects);
    useEffect(() => {

        console.log("Array", projectState)
    }, [])
    const [state, setState] = useState({  position: { index: 0, showBox: false } })
    const handleBoxToggle = (index) => {
        console.log(index);
        setState({
            ...state,
             
            position: {
            index: index,
            showBox: !state.position.showBox
        }
            } )
        };
return (
    <>
        <div>
            <h1>Projects....</h1>
            <hr className="lineTitle animateOne" />
        </div>
        <div class="cardsContainer">
            <div class="row row-cols-1 row-cols-md-2 g-4">

                {projectState.map((project, index) => {
                    return state.position.showBox && state.position.index === index ? <div name={index} onMouseOver={() => handleBoxToggle(index)}>

                        Project Card
                    </div> : <ProjectCards
                        name={index}
                        key={project.title}
                        img={project.img}
                        title={project.title}
                        desc={project.desc}
                        state={state}
                        index={index}
                        handleBoxToggle={handleBoxToggle}
                    />
                })}

            </div>
        </div>
    </>
)
}

export default Project
