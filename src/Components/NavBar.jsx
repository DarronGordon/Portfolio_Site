
import "./Styles/NavBarStyles.scss";
import  {useState} from 'react';
import dgLogo from './Images/dgLogo.png';

function NavBar  ()  
{ 
const toggleBtnClass="";
const path = window.location.pathname;
window.addEventListener('scroll', ChangeNavBg);

const pathname = path.replace(/[^a-zA-Z0-9 ]/g, '');
const imgClassNames=pathname+"img";
let isExpanded = false;
const[isNavExpanded, SetIsNavExpanded]= useState("main-navBod ");
const[isNavExpandedMNI, SetIsNavExpandedMNI]= useState("main-navItem");
const[isNavExpandedMNIS, SetIsNavExpandedMNIS]= useState("main-navItems");
const[navBarClassName, SetNavBarBgDisplay] = useState( "main-header");



function ToggleHamburger()
{

    isExpanded =!isExpanded;
    if(isExpanded==true)
        {
            SetIsNavExpanded("mobile-nav ");
            SetIsNavExpandedMNI("mobile-navItem");
            SetIsNavExpandedMNIS("mobile-navItems");
        }
    else if(isExpanded==false)
        {
            SetIsNavExpanded("main-navBod");
        }
}



function ToggleHamburgerOff()
{

    isExpanded =false;
    SetIsNavExpanded("main-navBod");
    SetIsNavExpandedMNI("main-navItem");
    SetIsNavExpandedMNIS("main-navItems");
}

function ChangeNavBg()
{

    var scrollValue = window.scrollY;

    if(scrollValue < 200)
    {
        SetNavBarBgDisplay("main-header-bgHidden");
    }
    else
    {
        SetNavBarBgDisplay("main-header-bgDisplay");
    }

}



  return (
    <div className={navBarClassName}>
    <div>
    <div className={imgClassNames} />
    <button id="toggle-button" className="toggle-button" onClick ={ ToggleHamburger}> <span className="toggle-buttonBar "/> <span className="toggle-buttonBar "/><span className="toggle-buttonBar "/><a href="/"></a> </ button>
    </div>

<div className="NavBar ">

  <nav className={isNavExpanded} >
    <ul className={isNavExpandedMNIS} onClick ={ ToggleHamburgerOff}>
        <li className={isNavExpandedMNI}>
            <a href="/">Home</a>
        </li>
        <li className={isNavExpandedMNI}>
            <a href="WebDevProjects">Web-Dev</a>
        </li>
    </ul>

<img  className="navBarLogo" src={dgLogo} />

            

    <ul className={isNavExpandedMNIS} onClick ={ ToggleHamburgerOff}>
        <li className={isNavExpandedMNI}>
              <a href="GameDevProjects">Game-Dev</a>
        </li>
        <li className={isNavExpandedMNI}>
              <a href="Contact">Contact</a>
        </li>
    </ul>
  </nav>

</div>
    </div>
  );
}

export default NavBar;