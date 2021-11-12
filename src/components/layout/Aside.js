import React, {useState} from 'react'
import {Nav} from "react-bootstrap";


const Aside = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  
  var locationName = window.location.pathname;
  let themeMode = "light";
  let isChecked = false;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(!localStorage.getItem('theme')){
    isChecked = (prefersDark) ? true : false;
    themeMode = (prefersDark) ? 'dark' : 'light';
    localStorage.setItem('theme', (prefersDark) ? 'dark' : 'light' );
  }else{
      
      isChecked = (localStorage.getItem('theme') === 'dark') ? true : false;
      themeMode = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
  }
const [theme, setThemeMode] = useState(themeMode);
 const updateTheme = () => {
  if(theme === "dark"){
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
  }else{
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
  }
}

const changeThemeMode = () => {
  if(theme === "dark") {
    setThemeMode("light");
    updateTheme(theme);
  }else{
    setThemeMode("dark");
    updateTheme(theme);
  }
}
 
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
          <li className="nav_link cursor-pointer" onClick={changeThemeMode}><span className="link"><i className="bi bi-brightness-high-fill"></i></span></li>
      </ul>
    </div>
  )
}

export default Aside
