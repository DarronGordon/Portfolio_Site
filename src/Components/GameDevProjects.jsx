import "./Styles/GameDevProjectsStyles.scss";

import gameCv from "./CV's/GameDevCv.pdf";

function GameDevProjects(){

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
        <div className="gameDevProjectsBod">
        <div className="gameDevProjectHeader showOnScroll">

        </div>
        <h1 className="showOnScroll">Game Development</h1>
        <br></br>

        <h3 className="cv showOnScroll"><a href={gameCv}>Game desgin CV</a></h3>
        <br></br>

        <h5 className="gameDevIntro showOnScroll">Currently I am using:<br/>
            Unity|C#|MonoBehaviour|NetworkBehaviour|Mirror.<br/>
            Some design patterns you will see me using in my games include:<br/>
            Singleton pattern<br/>
            Observer Pattern, using events and delegates.<br/>
            StateMachine Pattern<br/>
            New and old Input System
        </h5>

        
      
        <h3 className="webglHeader showOnScroll">Web-GL|Game-Jams</h3>
        <div className="section1 showOnScroll">

        <CreatePreviewBox name="Color" url="https://gigglytwigg.itch.io/colour"/>
        <CreatePreviewBox name="Franko" url="https://gigglytwigg.itch.io/frankos-hat"/>
        <CreatePreviewBox name="LifeOf" url="https://gigglytwigg.itch.io/lifeof"/>
        <CreatePreviewBox name="SpaceRace" url="https://gigglytwigg.itch.io/spacerace"/>
        <CreatePreviewBox name="RunFromAnxi" url="https://gigglytwigg.itch.io/"/>
        <CreatePreviewBox name="Prep2Die" url="https://icosaplexgames.itch.io/prepare-2-die"/>

        </div>

        <h3 className="mobileHeader showOnScroll">Mobile|Hyper casual Games.</h3>
        <div className="section2 showOnScroll">
        <CreatePreviewBox name="BobbleBounce" url="https://play.google.com/store/apps/details?id=com.DarronGordon.BobbleBounce"/>
        <CreatePreviewBox name="Dodger" url="https://play.google.com/store/apps/details?id=com.GigglyTwigg.Dodger"/>
        <CreatePreviewBox name="HungryZombie" url="https://play.google.com/store/apps/details?id=com.GigglyTwigg.Catcher"/>
        </div>

        </div>
    );
}

export default GameDevProjects;