import React, { Component } from 'react';
import Img from 'react-image';
class Preloader extends Component {
render(){
	const noweimg = () =>{
		const img = require("../../images/preloader.svg");
		return img
	}
  return(
      <div className="is-center-img"><Img className=""src={noweimg()} alt="termo" /></div>
    )
  }
}
export default Preloader;


