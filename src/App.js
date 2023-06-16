import Home from './Components/Home/Home';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import WebDevProjects from './Components/WebDevProjects';
import GameDevProjects from './Components/GameDevProjects';
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {

  let scroll = window.requestAnimationFrame ;

  
  function loop(){
    
  let elementsToShow = document.querySelectorAll(".showOnScroll");
    elementsToShow.forEach(function (element){
      if(isElementInViewport(element)){
        element.classList.add("isVisible"); 
      }
      else if(!isElementInViewport(element)){
        element.classList.remove("isVisible");
      }
    });
    scroll(loop); 
  }
 
  
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  loop();
  scroll(loop);

  return (
    <div className="App">
    <NavBar />

    <Routes >
    <Route path="/" element=<Home/> />
    <Route path="WebDevProjects" element=<WebDevProjects/> />
    <Route path="GameDevProjects" element=<GameDevProjects/> />
    <Route path="Contact" element=<Contact/> />
    </Routes>

      <Footer />
    </div>
  );
}

export default App;
