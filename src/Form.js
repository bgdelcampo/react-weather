import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import CurrentWeather from "./CurrentWeather";

export default function SearhEngine() {
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState(null);

    function handleResponse(response) {
        let iconURL = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        setWeather([
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        ]
        );
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search(event) {

        let apiKey = "38c9293a2365a91b362e3d61894095ed";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="enterCityName"
                    id="city-name"
                    placeholder="Enter your city"
                    onChange={handleCityChange}
                />
                <input
                    type="submit"
                    className="buttonSubmit"
                    id="button-submit"
                    value="Submit"
                />
            </form>
            <h2>{weather}</h2>
            <p className="currentDate" id="current-date">
                Monday 10:30
      </p>

            <CurrentWeather />
        </div>
    );
}
