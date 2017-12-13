import React, { Component } from 'react';
import './style/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Weather from './components/Weather/Weather';

class App extends Component {
  constructor() {
    super();
      this.state = {
          cityWeather:''
      };     
      this.getWeather = this.getWeather.bind(this);
  }
  getWeather(obj){
    this.setState({
      cityWeather:obj
    });
  }
  render() {
    return (
      <div className="columns ">
        <div className="column is-6 is-offset-3 container">
            <Header updateObj={this.getWeather} />
            <Weather currentWeather={this.state.cityWeather}/>
            <Footer />
        </div>
      </div>
    );
  }
}
export default App;

