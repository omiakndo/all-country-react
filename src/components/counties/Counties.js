import React, { useEffect, useState } from 'react';
import './Countries.css'

function LoadCounrty(){
    const [countrys , setCountrys]= useState([])
    useEffect( ()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountrys(data))
    },[])
    return(
      <div >
        <h1>Visit All Country In The WORLD!!!</h1>
        <h3>Available Countries: {countrys.length}</h3>
        {
          countrys.map(country => <DisplayData name = {country.name.common} flag={country.flags.png}></DisplayData>)
        }
      </div>
    )
  }
  
  function DisplayData(props){
    return(
      <div className='counties'>
        <h2 className='country'>Name: {props.name}</h2>
      
      </div>
    )
  }

export default LoadCounrty;