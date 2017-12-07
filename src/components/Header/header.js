import React, { Component } from 'react';

class Header extends Component {

constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        city:null
    }
  }
handleSubmit(e) {
    e.preventDefault();
    let yourCity = this.refs.name.value;
    this.setState({city: yourCity});
  }
  render() {
    return (
    	 <header>
         	<div className="">
         		<div className="">
         			 <h1 className="title"> WHAT WEATHER ??</h1>
						<form onSubmit={this.handleSubmit}>
						    <input type="" ref="name" placeholder="wpisz miasto" />
						     <button type="submit">Login</button>
						</form>
                     <p className="currentCity">{this.state.city}</p>
         		</div>
         	</div>
        </header>
    );
  }
}

export default Header;