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
      };     this.updateState = this.updateState.bind(this);
  }
  updateState(props){
    this.setState({
      cityWeather:props
    });
  }
  render() {
    return (
      <div className="columns">
        <div className="column is-6 is-offset-3 box">
            <Header updateShared={this.updateState} />
            <Weather currentWeather={this.state.cityWeather}/>
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;

