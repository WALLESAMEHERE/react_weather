import React, { Component } from 'react';
import './style/App.css';
import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Weather from './components/Weather/Weather';

class App extends Component {
  constructor() {
    super();
      this.state = {
          cityWeather:'',
          day:'',
          loaded:''
      };     
      this.getWeather = this.getWeather.bind(this);
      this.getDayNightBg = this.getDayNightBg.bind(this);
  }
  getWeather(obj){
    this.setState({
      cityWeather:obj,

    });
  }
  getDayNightBg(resp){
      this.setState({
        day:resp
      });
    }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
          loaded:true
      });
    },5000 )
  } 

  render() {
    const bgColor =()=> {
      const styles = {};
      if(this.state.day === true){
        let color ='#dfe2c9'
        styles.background= "linear-gradient("+color +", #adeacd)";
        return styles;
      }
      else{
        let color ='#656a84';
        styles.background= "linear-gradient("+color +", #adeacd)";
        return styles;
      }
    }
    return (      
      <div className="columns">
       <div className={ `pre-loader ${this.state.loaded ? 'hide-it' : null}` }><Preloader /></div>
        <div className="column is-6 is-offset-3 container" style={bgColor()}>
            <Header updateObj={this.getWeather} title=" Weather App" />
            <Weather currentWeather={this.state.cityWeather}/>
            <Footer timeOfDay={this.getDayNightBg} />
          
        </div>
      </div>
  
    );
  }
}
export default App;


// https://vidoza.net/embed-qzbs9yucwqbp.html&#10

// componentDidMount and componentDidUpdate - preloader