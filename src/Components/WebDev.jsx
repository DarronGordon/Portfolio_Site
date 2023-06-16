import "./Styles/Dev.scss";
import webCv from "./CV's/WebDevCv.pdf";
import gameCv from "./CV's/GameDevCv.pdf";

function WebDev(){

    return(
    <div className="webDevBody">


        <div className="webDevBod block">

        <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>ReactNative</li>
            <li>Css/Sass/Scss</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
        </ul>

        <h4><a href={webCv}>Website Development CV</a></h4>

        </div>

        <div className="softwareDevBod block">

<ul>
    <li>PhotoShop</li>
    <li>Krita</li>
    <li>Blender</li>
    <li>Canva</li>
    <li>SourceTree</li>

</ul>

</div>



<div className="gameDevBod block">

<ul>
    <li>C#</li>
    <li>Unity2D/3D</li>
    <li>MonoBehaviour</li>
    <li>NetworkBehaviour</li>
    <li>Mirror | netCode</li>
    <li>Builds</li>
    <li>Game desgin Patterns</li>
</ul>

<h4><a href={gameCv}>Game & Unity CV</a></h4>

</div>

    </div>

    );
}
export default WebDev;