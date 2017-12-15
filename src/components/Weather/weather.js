import React, {Component} from 'react';
import Img from 'react-image';



class Weather extends Component {

    render() {

    const weatherData = this.props.currentWeather;
    if (!weatherData) return <div>Loadin weather ...</div>;
    const weather = weatherData.weather[0];
    const pressure = weatherData.main.pressure
    const humidity = weatherData.main.humidity
    const celsjusz = weatherData.main.temp - 273.15;
    const round = celsjusz.toFixed(1);

// get main name weather and show image with weather
    const getImage = () =>{
        const weatherIcons = {
            // dodac haze bo odwala posrednia nazwe a nie maina...
                Clouds : require("../../images/cloudsunny.svg"),
                Clear : require("../../images/sunny.svg"),
                Thunderstorm : require("../../images/thunderstorm.svg"),
                Rain : require("../../images/rain.svg"),
                Snow : require("../../images/snow.svg"),
                Drizzle : require("../../images/drizzle.svg")
            }
            const mainWeather = weather.main;
            let imgPath = '';
            if(mainWeather){
                    imgPath = weatherIcons[mainWeather];

            }
        return imgPath
    }
    const getWindDir = () => {
        const styles = {};
        const windDir = weatherData.wind.deg
        styles.transform = "rotate("+windDir+"deg)";
        return styles;
    }

    return ( 
            <section className = "hero">
                <div className = "hero-body" >
                    <div className = "columns">
                        <div className = "column cloud"><Img src={getImage()} alt={weather.descripton} /></div> 
                        <div className = "column temperature" >{round}<sup>o</sup>C</div>
                    </div> 
                    <div className = "columns">
                        <div className = "column wind" >
                            <div className = "column wind_arrow"><Img src={require("../../images/baro.svg")} alt="wind arrow" /></div>
                            {pressure} hPa
                        </div>                         <div className = "column wind" >
                            <div className = "column wind_arrow"><Img src={require("../../images/humid.svg")} alt="wind arrow" /></div>
                            {humidity} %
                        </div> 
                        <div className = "column wind" >
                            <div className = "column wind_arrow"><Img style={getWindDir()} src={require("../../images/wind-arrow.svg")} alt="wind arrow" /></div>
                            {weatherData.wind.speed*3.6} km/h
                        </div> 

                    </div> 
                </div>
            </section>
        )
    }
}
export default Weather;
