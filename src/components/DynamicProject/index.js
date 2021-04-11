import React from 'react'

const DynamicCards = () => {

    const DynamicCardsData = [
        {
            title: "Group Project | APPetite",
            languages: "HTML, CSS, javaSript, JQuery, API, Local Storage, AJAX",
            demo: "https://karryns.github.io/Project_1/",
            code: "https://github.com/KarrynS/Project_1.git"
        },
        {
            title: "Group Project | Well❤️Me</h5>",
            languages: "Node, Express, Handlebars.js, Sequelize ORM, MySQL, Heroku, API, HTML, CSS, JavaScript, JQuery",
            demo: "https://wellme.herokuapp.com/",
            code: "https://github.com/KarrynS/WellMe.git"
        },
        {
            title: "Random Password Generator",
            languages: "HTML, CSS, javaSript",
            demo: "https://karryns.github.io/Password-Generator/",
            code: "https://github.com/KarrynS/Password-Generator.git"
        },
        {
            title: "Code Quiz",
            languages: "HTML, CSS, javaSript, jQuery, localStorage, web API's",
            demo: "https://karryns.github.io/Code-Quiz/",
            code: "https://github.com/KarrynS/Code-Quiz.git"
        },
        {
            title:"Work Day Scheduler",
            languages: "HTML, CSS, javaSript, jQuery, localStorage, moment.js",
            demo: "https://karryns.github.io/Work-Day-Scheduler/",
            code: "https://github.com/KarrynS/Work-Day-Scheduler.git"
        },
        {
            title: "Eat-Da-Burger",
            languages: "Node.js, mySQL, Express, Handlebars, Heroku and ORM",
            demo: "https://polar-spire-98874.herokuapp.com/",
            code: "https://github.com/KarrynS/Eat-Da-Burger.git"
        },
        {
            title: "Employee Tracker",
            languages: "Node.js, mySQL, inquirer",
            demo:"https://drive.google.com/file/d/1aBkEXWRnTvBFzcb40cxsyagBeSSDWhyw/view",
            code: "https://github.com/KarrynS/Employee-Tracker.git"
        },
        {
            title: "Note Taker",
            languages: "Express.js, Heroku, Javascript, HTML, CSS",
            demo: "https://secret-woodland-41524.herokuapp.com/",
            code: "https://github.com/KarrynS/Note-Taker.git"
        },
        {
            title: "Weather Dashboard",
            languages: "HTML, CSS, javaSript, JQuery, Third Party API's, Local Storage",
            demo: "https://karryns.github.io/Weather-Dashboard/",
            code: "https://github.com/KarrynS/Weather-Dashboard.git"
        },
    ]

    return (
        <>
        {DynamicCardsData.map(project => {
            return <DynamicCards 
                key={project.title}
                languages={project.languages}
                demo={project.demo}
                code={project.code}
                />
        })}
            <div className="col" id="CardOne">
                    <div class="card-body">
                        <h5 class='card-title'>Group Project | APPetite</h5>
                        <hr class='cardhr'/>
                        <p class='card-text' id='cardText'>"HTML, CSS, javaSript, JQuery, API, Local Storage, AJAX"</p>
                        <a class='btn' target='_blank' href="https://karryns.github.io/Project_1/" rel="noreferrer">Live demo</a>
                        <a class='btn' target='_blank' href="https://github.com/KarrynS/Project_1.git" rel="noreferrer">View Source Code</a>
                    </div>
               
            </div>
        </>
    )
}

export default DynamicCards;
