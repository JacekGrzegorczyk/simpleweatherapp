import React from 'react';
import './WeatherListItem.css';

const WeatherListItem = (props) => {

 return (
  <div className="card">
   <div className="header">
    <span className="card-icon">Cloud / Rain / Sun / Thunder </span>
    <span className="cityName">{props.data[0]}</span>
   </div>
   <div className="body">
    Details
   </div>
  </div>
 )
}

export default WeatherListItem