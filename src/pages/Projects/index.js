import React, { useState} from 'react'
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
import LinkCards from "../../components/Cards/LinkCards";
import GoogleBookSearch from "../../img/GoogleBookSearch.png";
//import projects from "../../utils/projects.json";

const projectArray = [
    {
        img: WellMeImg,
        title: "Group Project | Well❤️Me",
        desc: "A full stack application that allows users to track their wellness journey and reach fitness goals faster.",
        languages: "Node, Express, Handlebars.js, Sequelize ORM, MySQL, Heroku, API, HTML, CSS, JavaScript, JQuery",
        demo: "https://wellme.herokuapp.com/",
        code: "https://github.com/KarrynS/WellMe.git"

    },
    {
        img: Project1Img,
        title: "Group Project | Appetite",
        desc: "APPetite is a web browser based app that connects tourists to local cuisines in the area helping to generate sales for local businesses.",
        languages: "HTML, CSS, javaSript, JQuery, API, Local Storage, AJAX",
        demo: "https://karryns.github.io/Project_1/",
        code: "https://github.com/KarrynS/Project_1.git"

    },
    {
        img: GoogleBookSearch,
        title: "React Google Book Search",
        desc: "A MERN stack application that allows users to search and view books books through Google Books API. Books can then be 'saved' to a Mongo database.",
        languages: "React, Node, Express, MongoDB",
        demo: "",
        code: "https://github.com/KarrynS/Google-Books-Search.git"
    },
    {
        img: PasswordGenImg,
        title: "Random Password Generator",
        desc: "A browser application which generates a randomised password based on user-selected criteria. Parameters that can be included for the password are min-max length, lowercase letters, uppercase letters, numbers and special characters.", 
        languages: "HTML, CSS, javaSript",
        demo: "https://karryns.github.io/Password-Generator/",
        code: "https://github.com/KarrynS/Password-Generator.git"

    },
    {
        img: CodeQuizImg,
        title: "Code Quiz",
        desc: "A timed MCQ quiz to test your knowledge of Javascript.",
        languages: "HTML, CSS, javaSript, jQuery, localStorage, web API's",
        demo: "https://karryns.github.io/Code-Quiz/",
        code: "https://github.com/KarrynS/Code-Quiz.git"

    },
    {
        img: DayPlannerImg,
        title: "Work Day Scheduler",
        desc: "A simple browser run application that allows user to save events for each hour of the work day. The app is set up to have past, present and future time blocks where events can be stored and cleared from local storage.",
        languages: "HTML, CSS, javaSript, jQuery, localStorage, moment.js",
        demo: "https://karryns.github.io/Work-Day-Scheduler/",
        code: "https://github.com/KarrynS/Work-Day-Scheduler.git"

    },
    {
        img: EatDaBurgerImg,
        title: "Eat-Da-Burger",
        desc: "A restaraunt app that lets users input the names of burgers they'd like to eat and devour them. This app will store every burger whether eaten or not in a database", 
        languages: "Node.js, mySQL, Express, Handlebars, Heroku and ORM",
        demo: "https://polar-spire-98874.herokuapp.com/",
        code: "https://github.com/KarrynS/Eat-Da-Burger.git"

    },
    {
        img: EmployeeTrackerImg,
        title: "Employee-Tracker",
        desc: "A CLI application that allows for easier management of a company's employess. Features include viewing, adding and deleting employees, departments and roles as well as updating employee roles and viewing total department salary budget.", 
        languages: "Node.js, mySQL, inquirer",
        demo: "https://drive.google.com/file/d/1aBkEXWRnTvBFzcb40cxsyagBeSSDWhyw/view",
        code: "https://github.com/KarrynS/Employee-Tracker.git"


    }, {
        img: SavedNotesImg,
        title: "Note Taker",
        desc: "An application utilising backend Express.js to allow users to write, store and delete notes.", 
        languages: "Express.js, Heroku, Javascript, HTML, CSS",
        demo: "https://secret-woodland-41524.herokuapp.com/",
        code: "https://github.com/KarrynS/Note-Taker.git"

    },
    {
        img: WeatherDashboardImg,
        title: "Weather Dashboard",
        desc: "A weather dashboard built for travellers allowing them to see the weather outlook for cities around the world to help them plan their trip.",
        languages: "HTML, CSS, javaSript, JQuery, Third Party API's, Local Storage",
        demo: "https://karryns.github.io/Weather-Dashboard/",
        code: "https://github.com/KarrynS/Weather-Dashboard.git"

    },
]
const Project = () => {

    // const [projectState, setProjectState] = useState(projectArray);
    // useEffect(() => {

    //     console.log("Array", projectState)
    // }, [])
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
            <h1>Projects</h1>
            <hr className="lineTitle" />
        </div>
        <div class="cardsContainer">
            <div class="row row-cols-1 row-cols-md-2 g-4">

                {projectArray.map((project, index) => {
                    return state.position.showBox && state.position.index === index ? <div name={index} onMouseEnter={() => handleBoxToggle(index)}>

                        <LinkCards 
                        title={project.title}
                        key={index}
                        language={project.language}
                        demo={project.demo}
                        code={project.code}
                        />
                    </div> : <ProjectCards
                        name={index}
                        key={index}
                        img={project.img}
                        title={project.title}
                        desc={project.desc}
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
