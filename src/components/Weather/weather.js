import React, {
    Component
} from 'react';
// eslint-disable-next-line
const url = "http://api.openweathermap.org/data/2.5/weather?";
// eslint-disable-next-line
const apiKey = "cc84f24c217ecde43336ed5172280218";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Warszawa',
            description: '',
            weatherData: null,
        }
    }
    componentDidMount() {
        this.getWeather(this.state.city);
    }
    getWeather(city) {
        const currentUrl = url + 'APPID=' + apiKey + '&q=' + city;
        var myInit = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };
        fetch(currentUrl, myInit)
            .then(res => res.json()).then(json => {
                this.setState({
                    description: json.weather[0].description,
                });
            });
    }
    render() {
        return ( <
            section className = "hero" >
            <
            div className = "hero-body" >
            <
            div className = "columns" >
            <
            div className = "column" > {
                this.state.city
            } <
            /div> <
            div className = "column" > {
                this.state.description
            } < /div> <
            /div> <
            div className = "columns" >
            <
            div className = "column" > 3 <
            /div>

            <
            /div> <
            /div> <
            /section>
        )
    }
}
export default Weather;
