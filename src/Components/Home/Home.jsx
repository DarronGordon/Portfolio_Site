
import homeHeaderImage from "../Images/HeadingBanner.png"

import WebDev from '../WebDev';
import "../Styles/HomeStyles.scss";
import teddyImg from "../Images/teddyImg.png";
import HomeWebDev from "./HomeWebDev";
import Contact from "../Contact";
function Home() 
{

    return(
    <div className="homeBod">
    
    <header>
         <img className="headerBannerImage" src={homeHeaderImage}></img>
    </header>

    <h1 className="PageHeader">Welcome! <br></br> To my portfolio! </h1>

    <div className="Intro">

    <img src={teddyImg} className="teddyImg showOnScroll"/>

    <div className="Introduction-Summury showOnScroll">
        <h2  className="showOnScroll">Darron Michael Gordon.</h2>

        <h6  className="showOnScroll">BacNet BAC Technician</h6>
        <h6  className="showOnScroll">Web Developer</h6>
        <h6  className="showOnScroll">Game Designer</h6>
    </div>
    <div className="Introduction showOnScroll">
        <h6> My Journey started, fault finding then designing code for Plc's (Delta Controls) that controled large Hvac plantrooms, lighting scheduals and access controls. This inspired me along with my passion for art and gaming to start Game and Web-Developemnt.<br></br>I have Intrests in all Codeing Languages and frameworks, my current focus is C# .Net and JavaScript.Web3, Unity and Netcode are just some of the things im working on. </h6>
    </div>
    </div>
        <HomeWebDev/>

        <WebDev/>

        <Contact/>
    </div>
    );
}

export default Home;