import React, { Component } from 'react';
import Img from 'react-image';
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
  cityTrue(){
    if(this.state.obj.name){
      return <p className="currentCity"><Img src={require("../../images/tower.svg")}/>{this.state.obj.name}</p>;
    }
  }
  render() {
    return (
    	 <header>
         	<div className="">
         		<div className="">
         			 <h1 className="title">{this.props.title}</h1>
                      <WeatherForm getWeather={this.getWeather} />
               {this.cityTrue()}
         		</div>
         	</div>
        </header>
    );
  }
}

export default Header;