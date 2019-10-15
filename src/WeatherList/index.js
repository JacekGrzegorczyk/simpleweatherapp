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
    <WeatherListItem data={fakeData} />
   </div>
  )
 }
}

export default WeatherList