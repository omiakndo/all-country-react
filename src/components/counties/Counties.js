import React, { useEffect, useState } from 'react';
import'./Countries.css'
import Country from './Country/Country';

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
       <div className='countries'>
        {
          countrys.map(country => <Country country ={country} key={country.cca3}></Country>)
        }
       </div>
      </div>
    )
  }
  
 

export default LoadCounrty;