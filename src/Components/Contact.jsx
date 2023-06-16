
import "./Styles/contact.scss";
import webCv from "./CV's/WebDevCv.pdf";
import gameCv from "./CV's/GameDevCv.pdf";

 function Contact()
 {
     return (
        <div className="ContactBod">

        <div className="contactDetails showOnScroll">

        <div className="details">

        <h3 className="emailTitle">Email me:</h3>

        <h4 className="email">DarronMGordon@gmail.com</h4>

        <h3 className="contactCV">CV's</h3>

        <h4 className="webDevCV"><a href={webCv} download>*WebDev CV*</a></h4>

        <h4 className="gameDevCV"><a href={gameCv} download>*Game-Design CV*</a></h4>

        </div>

        </div>

        </div>
     )
 }

 export default Contact;