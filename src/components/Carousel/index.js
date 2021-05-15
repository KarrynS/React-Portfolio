import React from 'react'
import "./style.css";
//importing images
import ImgOne from "../../img/macbookswirl.jpg";
import ImgTwo from "../../img/basics.jpg";
import ImgThree from "../../img/teamwork2.jpg";
import ImgFour from "../../img/drive.jpg";

const Carousel = () => {
    return (
        <>
        <div className="carouselDiv">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-bs-target="#carouselExampleCaptions" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="4000">
                    <img src={ImgOne} className="d-block w-100 img-fluid" alt="laptop on wooden desk" />
                    <div className="carousel-caption caption-large d-sm-block">
                        <h5 className="carouselTitle">Full Stack Software Developer</h5>
                        <p className="carouselPara">with a passion for learning and eye for detail</p>
                    </div>
                </div>
            <div className="carousel-item" data-interval="4000">
                <img src={ImgTwo} className="d-block w-100 img-fluid" alt="typewriter on old desk"/>
                <div className="carousel-caption d-sm-block ">
                    <h5 className="carouselTitle">Think outside the box</h5>
                    <p className="carouselPara">Never afraid to return back to basics and push boundaries</p>
                </div>
            </div>
            <div className="carousel-item" data-interval="4000">
                <img src={ImgThree} className="d-block w-100 img-fluid" alt="people canoeing"/>
                <div className="carousel-caption d-sm-block">
                    <h5 className="carouselTitle" id="collabTitle">Collaboration</h5>
                    <p className="carouselPara" id="collab">Always ready to listen and keen to begin solving problems</p>
                </div>
            </div>
            <div className="carousel-item" data-interval="4000">
                <img src={ImgFour} className="d-block w-100 img-fluid" alt="photo of pair of shoes"/>
                <div className="carousel-caption d-sm-block ">
                    <h5 className="carouselTitle">Drive</h5>
                    <p className="carouselPara">Driven by a passion to know better with each iteration</p>
                </div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </a>
        </div>
        </div>
    </>
    )
}

export default Carousel;
