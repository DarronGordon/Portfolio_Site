
import WordCloud from "./wordCloud";
import "../Styles/HomeWebDevStyles.scss";



function HomeWebDev()
{

    return(
        <div>

            <div className="wordCloudDiv ">
            <WordCloud/>

            </div>

            <div className="portfolioLinks showOnScroll">
                
                <a href="webDevProjects">
                <div className="portfolioLink webDev ">
                <h5>Web-Development</h5>
                </div>
                </a>

                <a href="gameDevProjects">
                <div className="portfolioLink gameDev ">
                <h5>Game-Development</h5>
                </div>
                </a>

                <a href="gameDevProjects">
                <div className="portfolioLink unityDev"> 
                </div>
                </a>

                <a href="contact">
                <div className="portfolioLink contact ">
                <h5>Contact</h5>
                </div>
                </a>

            </div>
        </div>
    )
}

export default HomeWebDev;