import React from "react";
import "./CurrentWeather.css";
export default function CurrentWeather() {
    return (
        <div className="container">
            <h1 id="location">Dreden</h1>
            <p id="description-city" className="description">
                Clear
            </p>
            <div className="row align-items-center">
                <div className="col-md-7">
                    <div className="d-flex weather-temperature align-items-center">
                        <img
                            src="http://openweathermap.org/img/wn/01n@2x.png"
                            alt="Clear"
                            id="icon"
                            className="float-left"
                        />
                        <p id="current-weather" className="mb-0">
                            <strong className="temperatureStrong" id="temperature">
                                {" "}
                1{" "}
                            </strong>
                            <span className="unit">°C | °F</span>
                        </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <ul>
                        <li className="humidity">
                            Humidity: 16 <span id="humidity-city"></span> %
            </li>
                        <li className="wind">
                            Wind: 40 <span id="wind-city"></span> km/h
            </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
