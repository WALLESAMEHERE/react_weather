import React, { Component } from 'react';
import WeatherForm from '../WeatherForm';

class Header extends Component {
  constructor() {
    super();
      this.state = {          obj:''
      };
      this.secWeter = this.secWeter.bind(this);
  }
  secWeter(a){
    this.setState({
      obj:a
    });
    this.props.updateShared(this.state.obj);
  }
  render(w) {
    return (
    	 <header>
         	<div className="">
         		<div className="">
         			 <h1 className="title"> WHAT WEATHER ??</h1>
                        <WeatherForm testWeter={this.secWeter} 
                                     // testLink={this.state.location}
                                     />
                     <p className="currentCity">place : {this.state.obj.name}</p>
         		</div>
         	</div>
        </header>
    );
  }
}

export default Header;