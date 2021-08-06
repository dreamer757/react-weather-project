import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was created by Courtney Jones and is{" "}
          <a
            href="https://github.com/dreamer757/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://loving-easley-681023.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted by Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
