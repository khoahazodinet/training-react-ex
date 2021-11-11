import React from 'react';
import {contextGlobal} from "../../contextGlobal";
import {BsMoonFill} from "react-icons/all";

const NavBar = ()=>{
  const globalContext = React.useContext(contextGlobal);

  const [isDarkTheme, setIsDarkTheme] = globalContext.isDarkTheme;

  const handleDarkTheme = ()=>{
    setIsDarkTheme(rev=>!rev);
  }

  return(
    <nav className={`nav-container ${isDarkTheme ?'dark' : 'light'}`}>
      <div className='items'>
        <div className='item'>
          Where in the word?
        </div>

        <div className='item'>
          <button className='isDarkModeBtn' onClick={handleDarkTheme}>
            <BsMoonFill />
            &nbsp;&nbsp;Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
