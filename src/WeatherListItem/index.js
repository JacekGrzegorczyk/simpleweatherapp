import React, { Component } from 'react';
import './WeatherListItem.css';

const WeatherListItem = (props) => {

 return (
  <div className="card">
   <div className="header">
    <span className="cityName">{props.data[0]}</span>
   </div>
   <div className="body">

   </div>
  </div>
 )
}

export default WeatherListItem