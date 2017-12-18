import React, { Component } from 'react';

class Footer extends Component {

constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
      	h : new Date().getHours(),
		m : new Date().getMinutes(),
		day:true
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );

  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
        time: new Date().toLocaleString(),
      	h : new Date().getHours(),
		m : new Date().getMinutes(),
    });
    	if(this.state.h<18 && this.state.h > 6){
			this.setState({
				day:true,
			})
		}
		else{
			this.setState({
				day:false,
			})
		}
	this.props.timeOfDay(this.state.day);
  }
  render() {
  	  const zerop = (n)=> {
		return (parseInt(n,10) < 10 ? '0' : '')+n;
	}
    return (
      <div className="Footer">
      	<div className="currentTime">{zerop(this.state.h)} : {zerop(this.state.m)}</div>
          <p>CREATED BY BdevLUKAS</p>
      </div>
    );
  }
}

export default Footer;


