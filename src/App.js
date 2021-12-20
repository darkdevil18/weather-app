import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css"
import WeatherDetails from "./components/WeatherDetails";

export default function App() {
  const [weather, setWeather] = useState([]);

  document.body.classList.add('bg-dark');

  const getWeather = (parsedData) => {
    setWeather({
      data: parsedData,
    });
  }

  return (
    <div className="container-fluid p-0"
      style={{
        minHeight: '100vh'
      }}
    >
      <Form getWeather={getWeather} />
      <div style={{ height: '100%' }}>
        {weather.data !== undefined && weather.data.cod !== "404" ? (
          <WeatherDetails data={weather.data} />
        ) : null}
      </div>
    </div>
  )
}
