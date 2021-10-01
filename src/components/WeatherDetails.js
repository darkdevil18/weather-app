import React from "react";

export default function WeatherDetails(props) {
  const { data } = props;
  console.log(data);
  const iconURL = `https://openweathermap.org/img/wn/${data.cod !== 404 ? data.weather[0].icon : null}@2x.png`;
  return (
    <div className="vstack text-center container card align-items-center mb-3" style={{width:'40rem',height:'50vh'}}>
      <h1>{data.name}</h1>
      <div className="d-flex">
        <img src={iconURL} alt="" />
        <div className="vstack">
          <h4>Current Temp:- {Math.floor(data.main.temp)}&#8451;</h4>
          <h4>Feels Like:- {data.main.feels_like}&#8451;</h4>
          <h4>Humidity:- { data.main.humidity }%</h4>
          <h4>Visibility:- { data.visibility/1000 }Km</h4>
        </div>
        <img src={iconURL} alt="" />
      </div>
    </div>
  );
}
