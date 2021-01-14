import React, {Component} from 'react';
import Form from './Form'
import Result from './Result'
import './App.css'

class App extends Component {
  state = {
    city: '',
    info: '',
    error: ''
  }

  handleInputCity = (event) => {
    this.setState({
      city: event.target.value
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
          this.setState({
            info,
            error: false
          })
        })
        .catch(error => {
          this.setState({
            error: true
          })
        })
  }

  render() {
    return (
        <div>
          <Form city={this.state.city} change={this.handleInputCity} submit={this.handleCitySubmit}/>
          <Result information={this.state}/>
        </div>
    );
  }
}

export default App;
