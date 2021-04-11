import React from 'react'
import "./style.css";
import ProfilePhoto from "../../img/KSPhoto.jpeg";

const MainContent = () => {
    return (
        <>
              <section>
                <h1> About</h1>
                <hr className="lineTitle"/>
                <div className="card mb-3 imgDiv">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={ProfilePhoto} alt="Profile" className='img-fluid' id="portPhoto"/>
                        </div>
                        <div className="col-md-8 ">
                            <div className="bioDiv">
                                <h5 className="card-title">Who am I? </h5>
                                <p className="card-text">I'm a full stack software developer with a passion for making things run more efficiently and accurately. <br></br> I have a serious interest in integrating technology with healthcare, stemming from 12 years of clinical experience as an optometrist. </p>
                            </div>
                        </div>
                    </div>
                <br />
                <div>
                    <i className="devicon-html5-plain-wordmark icon"></i>
                    <i className="devicon-css3-plain-wordmark icon"></i>
                    <i className="devicon-javascript-plain icon"></i>
                    <i className="devicon-jquery-plain-wordmark icon"></i>
                    <i className="devicon-react-original-wordmark icon"></i>
                    <i className="devicon-nodejs-plain-wordmark icon"></i>
                    <i className="devicon-express-original-wordmark icon"></i>
                    <i className="devicon-mysql-plain-workmark"></i>
                    <i className="devicon-mongodb-plain-wordmark icon"></i>
                    <i className="devicon-git-plain-wordmark icon"></i>
                    <i className="devicon-github-original-wordmark icon"></i>
                    <i className="devicon-heroku-original-wordmark icon"></i>
                </div>
            </div>
        </section>  
    </>
    )
}

export default MainContent;
