import React, {Component} from 'react';
import Img from 'react-image';



class Weather extends Component {

    render() {

    const weatherData = this.props.currentWeather;
    if (!weatherData) return <div>...</div>;
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
    const getWindSpeed = ()=>{
        const changeVal = weatherData.wind.speed*3.6;
        const roundVal = changeVal.toFixed(1);
        return roundVal
    }
    return ( 
            <section className = "hero">
                <div className = "hero-body" >
                    <div className = "columns">
                        <div className = "column weather_main"><Img src={getImage()} alt={weather.descripton} /></div> 
                        <div className = "column weather_temperature" >{round}<sup>o</sup>C</div>
                    </div> 
                    <div className = "columns">
                        <div className = "column" >
                            <div className = "column weather_box"><Img src={require("../../images/baro.svg")} alt="wind arrow" /></div>
                            <p>{pressure} hPa</p>
                        </div>
                        <div className = "column" >
                            <div className = "column weather_box"><Img src={require("../../images/humid.svg")} alt="humadity" /></div>
                            <p>{humidity} %</p>
                        </div> 
                        <div className = "column" >
                            <div className = "column weather_box"><Img style={getWindDir()} src={require("../../images/wind-arrow.svg")} alt="wind arrow" /></div>
                            <p>{getWindSpeed()} km/h</p>
                        </div> 

                    </div> 
                </div>
            </section>
        )
    }
}
export default Weather;
