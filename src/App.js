import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}

            Bea
          {" "}
          and is{" "}
          <a
            href="https://github.com/bgdelcampo/react-weather"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}

        </footer>
      </div>
    </div>
  );
}
