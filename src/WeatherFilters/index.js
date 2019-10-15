import React, { Component } from 'react';
import './WeatherFilters.css';

class WeatherFilters extends Component {

 render() {
  return (
   <div className="filterWrapper">
    <span className="filterLabel"> Check the weather</span>
    <div className="searchWrapper">
     <input className="search" type="search"></input>
     <div className="btn btn-primary"> Search for Cities </div>
    </div>
   </div>
  )
 }
}

export default WeatherFilters