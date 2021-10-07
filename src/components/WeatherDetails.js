import React from "react";

export default function WeatherDetails(props) {
  const { data } = props;

  const bgURL = `url(/images/${data.weather[0].main}.jpg)`

  const container = document.getElementById('container');
  container.style.background = `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), ${bgURL}`;
  container.style.backgroundRepeat = 'no-repeat';
  container.style.backgroundPosition = 'center';

  return (
    <div
      className="vstack text-center container card mb-3 pt-5 border-0 tetx-light bg-transparent"
      style={{
        width: "80%",
        height: "50vh",
      }}
    >
      <h1 className="text-light">{data.name}</h1>
      <div className="d-flex justify-content-evenly align-items-center">
        <div className="vstack text-light">
          <h5>Current Temp:- {Math.floor(data.main.temp)}&#8451;</h5>
          <h5>Feels Like:- {data.main.feels_like}&#8451;</h5>
          <h5>Humidity:- {data.main.humidity}%</h5>
          <h5>Visibility:- {data.visibility / 1000}Km</h5>
          <h5>Weather:- {data.weather[0].main}</h5>
        </div>
      </div>
    </div>
  );
}
