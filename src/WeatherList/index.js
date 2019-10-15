import React, { Component } from 'react';
import './WeatherList.css';
import WeatherFilters from './../WeatherFilters'
import WeatherListItem from './../WeatherListItem'


const fakeData = ['Moscow', 'Warsaw', 'Porto']

class WeatherList extends Component {

 render() {
  return (
   <div className="container">
    <WeatherFilters />
    <div className="wrapper">
     <div className="single-wrapper">
      <WeatherListItem data={fakeData} />
     </div>
     <div className="single-wrapper">
      <WeatherListItem data={fakeData} />
     </div>
     <div className="single-wrapper">
      <WeatherListItem data={fakeData} />
     </div>
    </div>
   </div>
  )
 }
}

export default WeatherList