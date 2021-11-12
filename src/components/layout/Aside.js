import React, {useState} from 'react'
import {Nav} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import {setTheme} from "app/themeMode";


const Aside = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const currentTheme = useSelector((state) => state.themeMode.value)
  const dispatch = useDispatch();
  var locationName = window.location.pathname;
  let themeMode = "light";
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(!localStorage.getItem('theme')){
    themeMode = (prefersDark) ? 'dark' : 'light';
    localStorage.setItem('theme', (prefersDark) ? 'dark' : 'light' );
  }else{
      
      themeMode = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
  }

 const updateTheme = () => {
  localStorage.setItem('theme', currentTheme );
  if(currentTheme === "dark"){
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
  }else{
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
  }
}

const changeThemeMode = () => {
  if(currentTheme === "dark") {
    dispatch(setTheme("light"));
    updateTheme();
  }else{
    dispatch(setTheme("dark"));
    updateTheme();
  }
}
 
updateTheme();
  function fullscreen() {
   var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    setIsFullScreen(isInFullScreen);
    var docElm = document.documentElement;
    if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}


  return (
    <div className="aside-container d-flex flex-column">
      <Nav className="side_navbar flex-column">
          <Nav.Item className={(locationName === "/") ? 'active nav_link' : 'nav_link'} ><Nav.Link  href="/" className="link" ><i className="bi bi-pie-chart-fill"></i></Nav.Link ></Nav.Item>
      </Nav>
      <ul className="side_navbar mt-auto mb-0">
          <li className="nav_link cursor-pointer " onClick={fullscreen}><span className="link"><i className={(!isFullScreen) ? "bi bi-fullscreen-exit" : "bi bi-arrows-fullscreen"}></i></span></li>
          <li className="nav_link cursor-pointer" onClick={changeThemeMode}><span className="link"><i className={(currentTheme === "dark") ? 'bi bi-brightness-high-fill' : "bi bi-moon-stars-fill"}></i></span></li>
      </ul>
    </div>
  )
}

export default Aside
