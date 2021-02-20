import React from "react";
import "./Form.css";

export default function () {
    return (
        <div className="form">
            <form>
                <input
                    type="text"
                    className="enterCityName"
                    id="city-name"
                    placeholder="Enter your city"
                />
                <input
                    type="submit"
                    className="buttonSubmit"
                    id="button-submit"
                    value="Submit"
                />
            </form>
            <p className="currentDate" id="current-date">
                Monday 10:30
      </p>
        </div>
    );
}
