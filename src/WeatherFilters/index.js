import React, { Component } from 'react';
import './WeatherFilters.css';

class WeatherFilters extends Component {

 render() {
  return (
   <div className="wrapper">
    <span className="filterLabel"> Check the weather</span>
    <div className="filterWrapper">
     <input type="search"></input>
     <div class="btn btn-primary"> Search for Cities </div>
    </div>
   </div>
  )
 }
}

export default WeatherFilters