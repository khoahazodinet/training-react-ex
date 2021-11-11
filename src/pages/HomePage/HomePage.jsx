import React from "react";
import {contextGlobal} from "../../contextGlobal";
import countryApi from "../../api/countryApi";
import CountryItem from "../../components/CountryItem";
import {BiSearch} from "react-icons/all";

const HomePage = ()=>{
  const globalContext = React.useContext(contextGlobal);
  const [isDarkTheme] = globalContext.isDarkTheme;

  const [items, setItems] = React.useState(null);

  const [data, setData] = React.useState({
    nameCountry: ''
  });

  const [error, setError] = React.useState({
    isError: false,
    textError: ''
  });

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData(rev=>({
      ...data,
      [name]: value ? value : ''
    }))
  }

  const handleSubmit = (e)=>{
    if(e.key==='Enter'){
      countryApi.getByName(data.nameCountry).then((res)=>{
        setItems(res);
        setError({
          isError: false,
          textError: ''
        })
      }).catch((req)=>{
        console.log(req, 'error')
        setError({
          isError: true,
          textError: 'The name not found'
        })
      })
    }
  }

  React.useEffect(()=>{
    countryApi.getAll().then((res)=>{
      setItems(res)
      setError({
        isError: false,
        textError: ''
      })
    }).catch((req)=>{
      console.log(req)
      setError({
        isError: true,
        textError: 'The Server had error'
      })
    })
  },[])

  return(
    <div className={`homePage-container ${isDarkTheme ?'dark' : 'light'}`}>
      <div className='content'>
        <div className='searchBox'>
          <div className='inputBox'>
            <BiSearch className='searchIcon'/>
            <input type='text' value={data.name}
                   onKeyDown={handleSubmit}
                   name='nameCountry' onChange={handleChange}
                   placeholder='Search for Country...'/>
          </div>
          <div className='selectBox'>

          </div>
          <p className='error'>
            {error.isError && error.textError}
          </p>
        </div>
        {items && items.map((item, key)=>(
          <CountryItem item={item} key={key}/>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
