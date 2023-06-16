import App from "../App";
import "./Styles/webDevProjectsStyles.scss";

import webCv from "./CV's/WebDevCv.pdf";

function WebDevProjects(){

  function CreatePreviewBox(props)
  {
      var classNames ="previewBox "+ props.name;
      return(

              <a href={props.url}>
                  <div className={classNames}>
                      <h3>{props.name}</h3>
                  </div>
              </a>
      );
  }   


    return(
        <div className="webDevProjectsBod">
        <div className="webDevProjectHeader showOnScroll">

        </div>
        <h1 className="websitesHeader showOnScroll">Websites</h1>
        <br></br>
        <h3 className="websiteCV cv showOnScroll"><a href={webCv}>Web desgin CV</a></h3>
        <br></br>
        <h5 className="websiteIntro showOnScroll">I use the MERN Stack. or Mongo, Express.js, React.js, Node.js <br></br>FlexBox|Animations|Scss|Sass| And more.</h5>
        <div className="section1 showOnScroll">

        <CreatePreviewBox className="showOnScroll" name="MikeFourieTruckPlant" url="www.mikefourietruckplant.co.za"/>

        <CreatePreviewBox name="WSG" url="www.WiekusSwartGrapplingAcademy.co.za"/>

        <CreatePreviewBox name="DarronAir" url="www.darronair.co.za"/>

        <CreatePreviewBox name="WassNet" url="www.Wassnet.co.za"/>

        </div>

        <div className="section2">

        </div>

        </div>
    );
}

export default WebDevProjects;