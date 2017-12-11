import React, { Component } from 'react';
// eslint-disable-next-line
const config = {
  url :"http://api.openweathermap.org/data/2.5/weather?",
  apiKey :"cc84f24c217ecde43336ed5172280218"
}

class WeatherForm extends Component {
  constructor(props) {
        super(props);
        this.state = {
            weatherData:''
        }
    }

handleSubmit(e) {
    e.preventDefault();
    let yourCity = this.refs.name.value;
         const currentUrl = config.url + 'APPID=' + config.apiKey + '&q=' + yourCity;
        var myInit = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
      fetch(currentUrl, myInit)
            .then(res => res.json()).then(json => {
            // API WORK
              
                this.setState({
                    weatherData:json
              });
            this.props.testWeter(this.state.weatherData);
          });

  }

  render() {
    return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="search" ref="name" placeholder="wpisz miasto" />
                 <button type="submit">Login</button>
            </form>
    );
  }
}

export default WeatherForm;