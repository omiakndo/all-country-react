import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name , capital ,flags , population ,region} = props.country;
    
    return (
        <div className='country'>
           <h1>Country name:{name.common}</h1>
           <img src ={flags.png} /> 
           <p>Capital: {capital}</p>
           <p>population: {population}</p>
           <p>region: {region}</p>
         
        </div>
    );
};

export default Country;