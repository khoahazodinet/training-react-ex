import React from 'react';
import {contextGlobal} from "../../contextGlobal";

const CountryItem = (props)=>{
  const globalContext = React.useContext(contextGlobal);
  const [isDarkTheme] = globalContext.isDarkTheme;
  const { item } = props;
  console.log(item);

  return(
    <div className={`country-item-container ${isDarkTheme ?'dark' : 'light'}`}>
      <div className='flag'>
        <img src={item && item['flags']['png']} alt='country image' />
      </div>
      <div className='info'>
        <h1>{item && item['name']['official']}</h1>
        <p><b>Population</b>&nbsp;&nbsp;{item && item['population']}</p>
        <p><b>Region</b>&nbsp;&nbsp;{item && item['region']}</p>
        <p><b>Capital</b>&nbsp;&nbsp;{item && item['capital']}</p>
      </div>
    </div>
  );
}

export default React.memo(CountryItem);
