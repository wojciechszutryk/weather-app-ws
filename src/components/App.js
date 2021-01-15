import React, {Component} from 'react';
import Form from './Form'
import Result from './Result'
import './App.css'

class App extends Component {
  state = {
    city: '',
    weather: '',
    error: '',
    temp: '',
    pressure: '',
    windSpeed: '',
    time: '',
    cityName: ''
  }

  handleInputCity = (event) => {
    this.setState({
        city: event.target.value,
        cityName: '',
        error: false
    })
  }

  handleCitySubmit = (event) => {
    event.preventDefault()
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=626cacd80c67ff2e669b867f568cc47d&units=metric`;
    fetch(API)
        .then(response => {
          if(response.ok) return response
          else throw new Error('Error occurred')
        })
        .then(response => response.json())
        .then(info => {
            const currentTime = new Date(info.dt * 1000).toLocaleString()
          this.setState({
            city: info.name,
            weather: info.weather[0].id,
            temp: info.main.temp,
            pressure: info.main.pressure,
            windSpeed: info.wind.speed,
            time: currentTime,
            cityName: this.state.city,
            error: false
          })
            this.setBackground(this.state.weather);
        })
        .catch(error => {
          this.setState({
            error: true,
          })
        })
  }
    setBackground(code){
        console.log(window.location.origin)
      if (code<300) document.body.style.backgroundImage = "url(200.webp)";
      else if (code<400) document.body.style.backgroundImage = 'url(300.webp)';
      else if (code<500) document.body.style.backgroundImage = 'url(400.webp)';
      else if (code<600) document.body.style.backgroundImage = 'url(500.webp)';
      else if (code<700) document.body.style.backgroundImage = 'url(600.webp)';
      else if (code<800) document.body.style.backgroundImage = 'url(700.webp)';
      else if (code===800) document.body.style.backgroundImage = "url(800.webp)";
      else if (code<900) document.body.style.backgroundImage = 'url(900.webp)';
    }

  render() {
    return (
        <div className="weatherApp">
          <Form city={this.state.city} change={this.handleInputCity} submit={this.handleCitySubmit}/>
          <Result information={this.state}/>
        </div>
    );
  }
}

export default App;
