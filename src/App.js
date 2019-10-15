import React, { Component } from 'react';
import './App.css';
import WeatherList from './WeatherList'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


const API_KEY = "a30103a66838c3c96f2c9ec6061da68d"

class App extends Component {

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${API_KEY}&units=metric`);
    const weatherData = await api_call.json();
    console.log(weatherData)
  }

  render() {
    return (
      <div>
        <WeatherList />
        <button onClick={this.getWeather}> check the api </button>
      </div>
    )
  }
}

export default App;
