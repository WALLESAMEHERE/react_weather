import React, {Component} from 'react';



class Weather extends Component {

    render() {

    const weatherData = this.props.currentWeather;
    if (!weatherData) return <div>write City  . . . .</div>;
    const weather = weatherData.weather[0];
   
        return ( 
            <section className = "hero" >
                <div className = "hero-body" >
                    <div className = "columns">
                        <div className = "column">{weather.main}</div> 
                        <div className = "column" >{weatherData.wind.speed}</div> 
                    </div> 
                    <div className = "columns">
                        <div className = "column" >{weatherData.main.temp}</div>
                    </div> 
                </div>
            </section>
        )
    }
}
export default Weather;
