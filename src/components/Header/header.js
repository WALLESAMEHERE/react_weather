import React, { Component } from 'react';
import WeatherForm from '../WeatherForm';

class Header extends Component {
  constructor() {
    super();
      this.state = {          obj:''
      };
      this.getWeather = this.getWeather.bind(this);
  }
  getWeather(a){
    this.setState({
      obj:a
    });
    this.props.updateObj(this.state.obj);
  }
  render() {
    return (
    	 <header>
         	<div className="">
         		<div className="">
         			 <h1 className="title"> WHAT WEATHER ??</h1>
                      <WeatherForm getWeather={this.getWeather} />
               <p className="currentCity">place : {this.state.obj.name}</p>
         		</div>
         	</div>
        </header>
    );
  }
}

export default Header;