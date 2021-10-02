import React from "react";

export default function WeatherDetails(props) {
  const { data } = props;
  const iconURL = `https://openweathermap.org/img/wn/${data.cod !== 404 ? data.weather[0].icon : null
    }@2x.png`;
  
  return (
    <div
      className="vstack text-center container card mb-3 bg-dark text-light pt-5"
      style={{ width: "80%", height: "50vh", borderRadius:'1rem'}}
    >
      <h1>{data.name}</h1>
      <div className="d-flex justify-content-evenly align-items-center">
        <img src={iconURL} alt="" />
        <div className="vstack">
          <h5>Current Temp:- {Math.floor(data.main.temp)}&#8451;</h5>
          <h5>Feels Like:- {data.main.feels_like}&#8451;</h5>
          <h5>Humidity:- {data.main.humidity}%</h5>
          <h5>Visibility:- {data.visibility / 1000}Km</h5>
          <h5>Weather:- {data.weather[0].main}</h5>
        </div>
        <img src={iconURL} alt="" />
      </div>
    </div>
  );
}
